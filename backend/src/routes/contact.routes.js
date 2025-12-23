const router = require("express").Router();
const { contactController } = require("../controllers/contact.controller");
const { contactValidation } = require("../middlewares/validate.middleware");
const { applyForJob } = require("../controllers/careers.controller");
const { joinCommunity } = require("../controllers/community.controller");
const {
    sendResourceEnquiry,
} = require("../controllers/resources.controller");

router.post("/resources/enquiry", sendResourceEnquiry);
router.post("/apply", applyForJob);
router.post("/community", joinCommunity);
router.post("/", contactValidation, contactController);

module.exports = router;
