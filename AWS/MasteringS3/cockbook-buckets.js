const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
// Set the region
// AWS.config.update({region: 'REGION'});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

/*Summary of Library : 

listBucket();
checkBucket();
createBucket();
deleteBucket();
getACL();
getPolicy();
getPolicyStatus();
getLocation();
checkBucket();
getCORS() 
*/

// ==== [1] Get List Buckets
let listBucket = async () => {
  //Returns a list of all buckets owned by the authenticated sender of the request.
  await s3.listBuckets((err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data.Buckets);
    }
  });
};
//listBucket()

// ==== [2] Create Bucket
let createBucket = async () => {
  var bucketParams = {
    Bucket: 'hapuslagi222',
    ACL: 'public-read'
  };

  //Creates a new bucket.
  await s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Bucket Success Created =>', data.Location);
    }
  });
};
//createBucket()

// ==== [3] Delete Bucket
let deleteBucket = async () => {
  var bucketParams = {
    Bucket: 'hapuslagi222'
  };
  // Call S3 to delete the bucket
  await s3.deleteBucket(bucketParams, function(err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Bucket Success Deleted =>', data);
    }
  });
};
//deleteBucket()

// ==== [4] Get Bucket ACL
let getACL = async () => {
  var params = {
    Bucket: 'marketkoin' /* required */
  };
  await s3.getBucketAcl(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};
//getACL();

// ==== [5] Get Bucket Policy
let getPolicy = async () => {
  var params = {
    Bucket: 'marketkoin'
  };
  await s3.getBucketPolicy(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
    /*
   data = {
    Policy: "{\"Version\":\"2008-10-17\",\"Id\":\"LogPolicy\",\"Statement\":[{\"Sid\":\"Enables the log delivery group to publish logs to your bucket \",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"111122223333\"},\"Action\":[\"s3:GetBucketAcl\",\"s3:GetObjectAcl\",\"s3:PutObject\"],\"Resource\":[\"arn:aws:s3:::policytest1/*\",\"arn:aws:s3:::policytest1\"]}]}"
   }
   */
  });
};
//getPolicy();

// ==== [6] Get Bucket Policy Status
let getPolicyStatus = async () => {
  var params = {
    Bucket: 'marketkoin' /* required */
  };
  await s3.getBucketPolicyStatus(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};
//getPolicyStatus();

// ==== [7] Get Bucket Location
let getLocation = async () => {
  var params = {
    Bucket: 'marketkoin'
  };
  await s3.getBucketLocation(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
    /*
   data = {
    LocationConstraint: "us-west-2"
   }
   */
  });
};
//getLocation();

// ==== [8] Check Bucket Existence
//This operation is useful to determine if a bucket exists and you have permission to access it.
let checkBucket = async () => {
  var params = {
    Bucket: 'marketkoin'
  };
  await s3.headBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};
//checkBucket();

// ==== [9] Check Bucket CORS
let getCORS = async () => {
  var params = {
    Bucket: 'marketkoin'
  };
  await s3.getBucketCors(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
    /*
   data = {
    CORSRules: [
       {
      AllowedHeaders: [
         "Authorization"
      ], 
      AllowedMethods: [
         "GET"
      ], 
      AllowedOrigins: [
         "*"
      ], 
      MaxAgeSeconds: 3000
     }
    ]
   }
   */
  });
};
getCORS();
