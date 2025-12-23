const { sendContactMail } = require("../services/mail.service");

exports.contactController = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(req.body);
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        await sendContactMail({ name, email, message });

        return res.status(200).json({
            message: "Message sent successfully",
        });
    } catch (error) {
        console.error("Contact mail error:", error);
        return res.status(500).json({
            message: "Failed to send message",
        });
    }
};
