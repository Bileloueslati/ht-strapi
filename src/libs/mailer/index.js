const NodeMailer = require("nodemailer");

const Hbs = require("nodemailer-express-handlebars");

const mailer = NodeMailer.createTransport({
  host: "ssl0.ovh.net",
  port: 587,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

mailer.use(
  "compile",
  Hbs({
    viewPath: `${__dirname}/views/`,
    extName: ".hbs",
    viewEngine: {
      extname: ".hbs",
      layoutsDir: `${__dirname}/views/`,
      defaultLayout: false,
      partialsDir: `${__dirname}/views/`,
    },
  })
);

module.exports = mailer;
