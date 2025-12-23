const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const contactRoutes = require("./routes/contact.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/contact", contactRoutes);

app.use(errorHandler);

module.exports = app;
