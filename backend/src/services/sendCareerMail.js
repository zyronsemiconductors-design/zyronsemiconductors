// services/careerMail.service.js
const transporter = require("../config/mail.config");

exports.sendCareerMail = async ({
    name,
    email,
    phone,
    position,
    message,
    resumeBase64,
    resumeName,
}) => {
    const htmlTemplate = `
  <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
      
      <div style="background: #16a34a; color: #fff; padding: 20px;">
        <h2 style="margin: 0;">New Job Application</h2>
        <p style="margin: 5px 0 0;">Zyron Semiconductors Careers</p>
      </div>

      <div style="padding: 25px;">
        <p>Hello HR Team,</p>
        <p>You have received a new job application:</p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || "-"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Position</td><td style="padding:8px;">${position}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || "-"}</td></tr>
        </table>

        <p>
          Reply to candidate: <a href="mailto:${email}">${email}</a>
        </p>

        <p style="color:#555;">Regards,<br/>Zyron Website Bot</p>
      </div>

      <div style="background:#f1f5f9;padding:12px;text-align:center;font-size:12px;color:#666;">
        © ${new Date().getFullYear()} Zyron Semiconductors Pvt. Ltd.
      </div>
    </div>
  </div>
  `;

    const attachments = resumeBase64
        ? [
            {
                filename: resumeName || "resume.pdf",
                content: resumeBase64.split("base64,")[1],
                encoding: "base64",
            },
        ]
        : [];

    return transporter.sendMail({
        from: `"Zyron Careers" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Job Application: ${position} - ${name}`,
        html: htmlTemplate,
        attachments,
    });
};
