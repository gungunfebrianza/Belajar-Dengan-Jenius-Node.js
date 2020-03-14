var AWS = require("aws-sdk");

// AWS.config.update({ region: 'us-east-1' });
// var credentials = new AWS.SharedIniFileCredentials({
//   profile: 'default'
// });
// AWS.config.credentials = credentials;

AWS.config.update({
  accessKeyId: "AKIA3QGK743NANAO6HXZ",
  secretAccessKey: "qAHNXZzlTKUARf8NyTY/q7vPEAwgUwDw9X6N2EAO",
  region: "us-east-1"
});

var ses = new AWS.SES();

// Replace sender@example.com with your "From" address.
// This address must be verified with Amazon SES.
const sender = "admin@pintercoding.com";

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified.
const recipient = "yumavol@gmail.com";

// The subject line for the email.
const subject = "Amazon SES Test (AWS SDK for JavaScript in Node.js)";

// The email body for recipients with non-HTML email clients.
const body_text =
  "Amazon SES Test (SDK for JavaScript in Node.js)\r\n" +
  "This email was sent with Amazon SES using the " +
  "AWS SDK for JavaScript in Node.js.";

// The HTML body of the email.
const body_html = `<html>
<head></head>
<body>
  <h1>Amazon SES Test (SDK for JavaScript in Node.js)</h1>
  <p>This email was sent with
    <a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
    <a href='https://aws.amazon.com/sdk-for-node-js/'>
      AWS SDK for JavaScript in Node.js</a>.</p>
</body>
</html>`;

// The character encoding for the email.
const charset = "UTF-8";

// Specify the parameters to pass to the API.
var params = {
  Source: sender,
  Destination: {
    ToAddresses: [recipient]
  },
  Message: {
    Subject: {
      Data: subject,
      Charset: charset
    },
    Body: {
      Text: {
        Data: body_text,
        Charset: charset
      },
      Html: {
        Data: body_html,
        Charset: charset
      }
    }
  }
  // ConfigurationSetName: configuration_set
};

//Try to send the email.
ses.sendEmail(params, function(err, data) {
  // If something goes wrong, print an error message.
  if (err) {
    console.log(err.message);
  } else {
    console.log("Email sent! Message ID: ", data.MessageId);
  }
});
