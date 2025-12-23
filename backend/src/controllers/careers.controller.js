// controllers/careers.controller.js
const { sendCareerMail } = require("../services/sendCareerMail");

exports.applyForJob = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            position,
            message,
            resumeBase64,
            resumeName,
        } = req.body;

        if (!name || !email || !position) {
            return res
                .status(400)
                .json({ message: "Name, Email and Position are required" });
        }

        await sendCareerMail({
            name,
            email,
            phone,
            position,
            message,
            resumeBase64,
            resumeName,
        });

        res.json({ message: "Job application sent successfully" });
    } catch (error) {
        console.error("Career mail error:", error);
        res.status(500).json({ message: "Failed to send job application" });
    }
};
