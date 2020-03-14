const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
// Set the region
// AWS.config.update({region: 'REGION'});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

//Returns some or all (up to 1000) of the objects in a bucket.
let listFile = async () => {
  // ==== [1] Get List Buckets
  // Create the parameters for calling listObjects
  var bucketParams = {
    Bucket: 'marketkoin',
    MaxKeys: 3,
    Prefix: 'p' //Limits the response to keys that begin with the specified prefix.
  };

  // Call S3 to obtain a list of the objects in the bucket
  await s3.listObjects(bucketParams, function (err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
    }
  });
};

//listFile();

let getFile = async () => {
  var params = {
    Bucket: 'marketkoin',
    Key: 'key.txt'
    //Range: 'bytes=0-9' //Downloads the specified range bytes of an object.
  };
  await s3.getObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response   //data.Body
    /*
   data = {
    AcceptRanges: "bytes", 
    ContentLength: 10, 
    ContentRange: "bytes 0-9/43", 
    ContentType: "text/plain", 
    ETag: "\"0d94420ffd0bc68cd3d152506b97a9cc\"", 
    LastModified: <Date Representation>, 
    Metadata: {
    }, 
    VersionId: "null"
   }
   */
  });
};

//getFile();

let deleteFile = async () => {
  var params = {
    Bucket: 'marketkoin',
    Key: 'users/gungunfebrianza/user_1574198215665_Gambar_Foto.jpg'
  };
  await s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
    /*
   data = {
   }
   */
  });
};

//deleteFile();

let copyFile = async () => {
  var params = {
    Bucket: 'marketkoin',
    CopySource: '/marketkoin/back-ktp-right.jpg',
    Key: 'test/copy-back-ktp-right.jpg'
  };
  await s3.copyObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
    /*
   data = {
    CopyObjectResult: {
     ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
     LastModified: <Date Representation>
    }
   }
   */
  });
};

deleteFile();
