// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');

// const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
// AWS.config.credentials = credentials;
//uuid.v4();

/* Uploads an arbitrarily sized buffer, blob, or stream, using intelligent concurrent handling of parts if the payload is large enough. You can configure the concurrent queue size by setting options. Note that this is the only operation for which the SDK can retry requests with stream bodies. */

//const s3 = new AWS.S3();

//Create s3 object
const s3 = new AWS.S3({
  accessKeyId: 'AKIA3QGK743NONXBXM4Z',
  secretAccessKey: '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',
  region: 'us-east-1'
});

const filePath = './package.json';

const uploadFile = filePath => {
  /*The callback is passed two arguments (err, data), where data is the contents of the file.
  If no encoding is specified, then the raw buffer is returned. */
  fs.readFile(filePath, async (err, data) => {
    if (err) console.error(err);

    var base64data = new Buffer(data, 'binary');

    const params = {
      Bucket: 'marketkoin', // Name of the bucket to which the PUT operation was initiated.
      Key: 'key.txt', // Object key for which the PUT operation was initiated.
      Body: base64data,
      ACL: 'public-read',
      StorageClass: 'STANDARD' // The type of storage to use for the object. Defaults to 'STANDARD'.
    };

    await s3.upload(params, (err, data) => {
      if (err) console.error(`Upload Error ${err}`);
      console.log(data); //data.location to get URL uploaded file
    });
  });
};

uploadFile(filePath);
