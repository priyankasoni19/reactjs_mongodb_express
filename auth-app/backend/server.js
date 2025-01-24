const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
// MongoDB Connection


mongoose.connect(process.env.MONGO_URI)


    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

