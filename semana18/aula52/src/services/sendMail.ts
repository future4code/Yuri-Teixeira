const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "astolffomuller@gmail.com",
    pass: "ypt1408qwe", // naturally, replace both with your real credentials or an application-specific password
  },
});

type emailBody = {
  from: string;
  to: string[];
  subject: string;
  text: string;
};

const sendMail = (email: emailBody) =>
  transporter.sendMail(email, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
