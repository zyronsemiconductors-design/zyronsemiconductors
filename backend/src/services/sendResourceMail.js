// services/resourceMail.service.js
const transporter = require("../config/mail.config");

exports.sendResourceMail = async ({ name, email, topic, message }) => {
    const htmlTemplate = `
  <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
      
      <div style="background: #7c3aed; color: #fff; padding: 20px;">
        <h2 style="margin: 0;">New Resources Enquiry</h2>
        <p style="margin: 5px 0 0;">Zyron Semiconductors Website</p>
      </div>

      <div style="padding: 25px;">
        <p>Hello Team,</p>
        <p>A user has requested expert guidance / resources:</p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Topic</td>
            <td style="padding: 8px;">${topic || "General"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Message</td>
            <td style="padding: 8px;">${message || "-"}</td>
          </tr>
        </table>

        <p style="margin-top: 30px;">
          Reply to: <a href="mailto:${email}">${email}</a>
        </p>

        <p style="color: #555;">Regards,<br/>Zyron Website Bot</p>
      </div>

      <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #666;">
        © ${new Date().getFullYear()} Zyron Semiconductors Pvt. Ltd.
      </div>
    </div>
  </div>
  `;

    const recipients = [
        // process.env.EMAIL_GENERAL,
        // process.env.EMAIL_HR,
        process.env.EMAIL_USER
    ].filter(Boolean);

    return transporter.sendMail({
        from: `"Zyron Website" <${process.env.EMAIL_USER}>`,
        to: recipients.join(","),
        replyTo: email,
        subject: `Resources Enquiry - ${name}`,
        html: htmlTemplate,
    });
};
