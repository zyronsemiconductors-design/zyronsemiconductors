// controllers/resources.controller.js
const { sendResourceMail } = require("../services/sendResourceMail");

exports.sendResourceEnquiry = async (req, res) => {
    try {
        const { name, email, topic, message } = req.body;

        if (!name || !email) {
            return res
                .status(400)
                .json({ message: "Name and Email are required" });
        }

        await sendResourceMail({ name, email, topic, message });

        res.json({ message: "Resources enquiry sent successfully" });
    } catch (error) {
        console.error("Resources mail error:", error);
        res.status(500).json({ message: "Failed to send resources enquiry" });
    }
};
