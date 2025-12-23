// controllers/community.controller.js
const { sendCommunityMail } = require("../services/sendCommunityMail");

exports.joinCommunity = async (req, res) => {
    try {
        const { name, email, interest, message } = req.body;

        if (!name || !email) {
            return res
                .status(400)
                .json({ message: "Name and Email are required" });
        }

        await sendCommunityMail({ name, email, interest, message });

        res.json({ message: "Community join request sent successfully" });
    } catch (error) {
        console.error("Community mail error:", error);
        res.status(500).json({ message: "Failed to send community request" });
    }
};
