const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

// Sign Up Route

router.post("/signup", async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const newUser = new User({ username, email, password });

        await newUser.save();

        res.status(201).json({ message: "User created successfully" });

    } catch (err) {

        res.status(500).json({ message: "Server error" });

    }

});

// Sign In Route

router.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token, username: user.username });

    } catch (err) {

        res.status(500).json({ message: "Server error" });

    }

});

module.exports = router;

