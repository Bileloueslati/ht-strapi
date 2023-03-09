const sendEmail = require("../services/contact.service");

module.exports = {
  async index(ctx) {
    try {
      const data = ctx.request.body;
      sendEmail("contact", "Demande de contact", data);
      ctx.send(data);
    } catch (e) {
      return ctx.badRequest();
    }
  },

  async appointement(ctx) {
    try {
      const data = ctx.request.body;
      sendEmail("appointement", "Demande de consultation", data);
      ctx.send(data);
    } catch (e) {
      return ctx.badRequest();
    }
  },
};
