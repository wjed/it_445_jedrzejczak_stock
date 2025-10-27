// Auth configuration for Cognito - us-east-1 region
export const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_hmo1NV9TO",
  client_id: "1n94am2jirka95privfedg42tu",
  redirect_uri: "https://dia5bbocf1z3p.cloudfront.net/",
  response_type: "code",
  scope: "email openid phone",
  automaticSilentRenew: true,
  loadUserInfo: true,
  // Additional settings for better logout handling
  monitorSession: false,
  checkSessionInterval: 2000,
};

export const cognitoDomain = "https://us-east-1hmo1nv9to.auth.us-east-1.amazoncognito.com";