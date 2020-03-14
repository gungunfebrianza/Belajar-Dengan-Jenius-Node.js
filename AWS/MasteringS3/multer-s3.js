var aws = require('aws-sdk');
var express = require('express');
var multer = require('multer');
var multerS3 = require('multer-s3');

var app = express();
var http = require('http').Server(app);

const s3 = new aws.S3({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-1'
});

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'latihan',
    acl: 'public-read',
    StorageClass: 'STANDARD',
    cacheControl: 'max-age=31536000',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function(req, file, cb) {
      cb(null, Date.now().toString() + '_' + file.originalname);
    }
  })
}).fields([
  {
    name: 'photos',
    maxCount: 1
  },
  {
    name: 'user_picture',
    maxCount: 1
  }
]);

app.post('/', function(req, res, next) {
  upload(req, res, function(err) {
    console.log('-------------');
    console.log(req.files);
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err);
    } else if (err) {
      console.log(err);
      // An unknown error occurred when uploading.
    }
    res.end('success uploaded ' + req.files.length);
  });
});

const port = process.env.PORT || 4444;
http.listen(port, () => console.log(`on port ${port}`));
