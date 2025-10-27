from aws_cdk import (
    Stack,
    Duration,
    aws_s3 as s3,
    aws_s3_deployment as s3deploy,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as origins,
    aws_lambda as _lambda,
    aws_apigateway as apigateway,
    aws_dynamodb as dynamodb,
    aws_cognito as cognito,
    aws_iam as iam,
    RemovalPolicy,
    CfnOutput,
)
from constructs import Construct

class Capstone2Stack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # S3 bucket for hosting React app
        website_bucket = s3.Bucket(
            self, "WebsiteBucket",
            website_index_document="index.html",
            website_error_document="error.html",
            public_read_access=True,
            removal_policy=RemovalPolicy.DESTROY,
            auto_delete_objects=True,
            block_public_access=s3.BlockPublicAccess(
                block_public_acls=False,
                block_public_policy=False,
                ignore_public_acls=False,
                restrict_public_buckets=False
            )
        )

        # CloudFront distribution for the website
        distribution = cloudfront.Distribution(
            self, "WebsiteDistribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(website_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
            default_root_object="index.html",
            error_responses=[
                cloudfront.ErrorResponse(
                    http_status=403,
                    response_http_status=200,
                    response_page_path="/index.html",
                    ttl=Duration.minutes(30),
                ),
                cloudfront.ErrorResponse(
                    http_status=404,
                    response_http_status=200,
                    response_page_path="/index.html",
                    ttl=Duration.minutes(30),
                )
            ]
        )

        # Deploy React app to S3
        s3deploy.BucketDeployment(
            self, "DeployWebsiteV6",
            sources=[s3deploy.Source.asset("./frontend/build")],
            destination_bucket=website_bucket,
            distribution=distribution,
            distribution_paths=["/*"],
            prune=True,  # Remove old files
        )

        # Import existing Cognito User Pool (the original one)
        user_pool = cognito.UserPool.from_user_pool_id(
            self, "JMUAdvisorUserPool",
            user_pool_id="us-east-1_hmo1NV9TO"
        )

        # Import existing Cognito User Pool Client (the original one)
        user_pool_client = cognito.UserPoolClient.from_user_pool_client_id(
            self, "JMUAdvisorUserPoolClient",
            user_pool_client_id="1n94am2jirka95privfedg42tu"
        )

        # DynamoDB table for storing data
        table = dynamodb.Table(
            self, "DataTable",
            partition_key=dynamodb.Attribute(
                name="id",
                type=dynamodb.AttributeType.STRING
            ),
            removal_policy=RemovalPolicy.DESTROY,
        )

        # DynamoDB table for user profiles
        profiles_table = dynamodb.Table(
            self, "ProfilesTable",
            partition_key=dynamodb.Attribute(
                name="user_id",
                type=dynamodb.AttributeType.STRING
            ),
            removal_policy=RemovalPolicy.DESTROY,
        )

        # DynamoDB table for games and quiz data
        games_table = dynamodb.Table(
            self, "GamesTable",
            partition_key=dynamodb.Attribute(
                name="id",
                type=dynamodb.AttributeType.STRING
            ),
            sort_key=dynamodb.Attribute(
                name="type",
                type=dynamodb.AttributeType.STRING
            ),
            removal_policy=RemovalPolicy.DESTROY,
        )

        # DynamoDB table for leaderboard
        leaderboard_table = dynamodb.Table(
            self, "LeaderboardTable",
            partition_key=dynamodb.Attribute(
                name="course_id",
                type=dynamodb.AttributeType.STRING
            ),
            sort_key=dynamodb.Attribute(
                name="score_timestamp",
                type=dynamodb.AttributeType.STRING
            ),
            removal_policy=RemovalPolicy.DESTROY,
        )

        # Lambda function for API backend
        api_lambda = _lambda.Function(
            self, "ApiFunction",
            runtime=_lambda.Runtime.PYTHON_3_9,
            handler="games_handler.handler",
            timeout=Duration.seconds(30),
            environment={
                "USER_POOL_ID": "us-east-1_hmo1NV9TO",
                "TABLE_NAME": table.table_name,
                "PROFILES_TABLE_NAME": profiles_table.table_name,
                "GAMES_TABLE_NAME": games_table.table_name,
                "LEADERBOARD_TABLE_NAME": leaderboard_table.table_name,
                "KNOWLEDGE_BASE_ID": "ISOPKENVXJ"
            },
            code=_lambda.Code.from_asset("lambda"),
        )

        # Grant Lambda permissions to access DynamoDB
        table.grant_read_write_data(api_lambda)
        profiles_table.grant_read_write_data(api_lambda)
        games_table.grant_read_write_data(api_lambda)
        leaderboard_table.grant_read_write_data(api_lambda)
        
        # Grant Lambda permissions to access Bedrock
        api_lambda.add_to_role_policy(
            iam.PolicyStatement(
                effect=iam.Effect.ALLOW,
                actions=[
                    "bedrock:InvokeModel",
                    "bedrock:RetrieveAndGenerate",
                    "bedrock:Retrieve"
                ],
                resources=["*"]
            )
        )

        # API Gateway
        api = apigateway.RestApi(
            self, "WebsiteApi",
            rest_api_name="Website API",
            description="API for the React website",
            default_cors_preflight_options=apigateway.CorsOptions(
                allow_origins=apigateway.Cors.ALL_ORIGINS,
                allow_methods=apigateway.Cors.ALL_METHODS,
                allow_headers=["Content-Type", "Authorization"]
            )
        )

        # API Gateway integration
        integration = apigateway.LambdaIntegration(api_lambda)
        api.root.add_method("ANY", integration)
        api.root.add_proxy(
            default_integration=integration,
            any_method=True
        )

        # Outputs
        CfnOutput(
            self, "WebsiteURL",
            value=f"https://{distribution.distribution_domain_name}",
            description="Website URL"
        )

        CfnOutput(
            self, "ApiURL",
            value=api.url,
            description="API Gateway URL"
        )

        CfnOutput(
            self, "BucketName",
            value=website_bucket.bucket_name,
            description="S3 Bucket Name"
        )

        CfnOutput(
            self, "UserPoolId",
            value="us-east-1_hmo1NV9TO",
            description="Cognito User Pool ID"
        )

        CfnOutput(
            self, "UserPoolClientId",
            value="1n94am2jirka95privfedg42tu",
            description="Cognito User Pool Client ID"
        )

        CfnOutput(
            self, "CognitoDomain",
            value="https://us-east-1hmo1nv9to.auth.us-east-1.amazoncognito.com",
            description="Cognito Domain URL"
        )
