#!/usr/bin/env python3
import os

import aws_cdk as cdk

from capstone_2.capstone_2_stack import Capstone2Stack


app = cdk.App()
Capstone2Stack(app, "Capstone2Stack",
    # Back to us-east-1 for simplicity
    env=cdk.Environment(account='886436942169', region='us-east-1'),
    )

app.synth()
