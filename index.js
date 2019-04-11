const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'herman51@ethereal.email',
        pass: 'jbj3qSVprs5nHMbuWr'
    }
});

  // send mail with defined transport object
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello Goober", // Subject line
    text: "Hello World?", // plain text body
    html: '<b>Hello world?</b>',   
    attachments: [     
            {   // file on disk as an attachment
                filename: 'PDFs ???',
                path: __dirname+ '/Testing for doc upload.pdf', // stream this file
               
            }      
    ]

  };
  
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });


  // Preview only available when sending through an Ethereal account
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//}

//main().catch(console.error);