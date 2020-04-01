let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognitol,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await s3.listObjects({
            Bucket: "as2-test-lahiru",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    try {
        let data = await ddb.put({
            TableName: "hirutest",
            Item: {
                price: "l"
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};