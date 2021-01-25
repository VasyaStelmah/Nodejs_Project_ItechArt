const nodemailer = require("nodemailer");

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport(
      {
        pool: true,
        maxConnections: 10,
        host: process.env.HOST_NAME,
        port: process.env.PORT_NODEMAILER,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      },
      {
        from: `${process.env.NAME_SITE} <${process.env.EMAIL}>`,
      }
    );
  }

  async sendMail(email, subject, message) {
    await this.transporter.verify();

    const info = await this.transporter.sendMail({
      to: email,
      subject: subject,
      text: message,
    });
  }
}

module.exports = new Mailer();
