const mailer = require("../../../libs/mailer");

/**
 * 
 * @param {string} template 
 * @param {string} subject 
 * @param {object} context 
 */
const sendEmail = (template, subject, context) => {
  mailer.sendMail({
    to: "mrbileltn@gmail.com",
    from: `Health travel noreply@canfianceesthetique.com`,
    subject,
    replyTo: context.email,
    context,
    template: template,
  });
};
module.exports = sendEmail;
