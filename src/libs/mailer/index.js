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

const viewPath = `${__dirname}/views/`;

mailer.use(
  "compile",
  Hbs({
    viewPath,
    extName: ".hbs",
    viewEngine: {
      extname: ".hbs",
      layoutsDir: viewPath,
      defaultLayout: false,
      partialsDir: viewPath,
    },
  })
);

module.exports = mailer;
