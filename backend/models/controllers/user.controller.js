import { User } from "../user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User registration
export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;

        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({ message: "Something is missing", success: false });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email.", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ fullname, email, phoneNumber, password: hashedPassword, role });

        return res.status(201).json({ message: "Account created successfully.", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

// User login
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ message: "Something is missing", success: false });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        if (role !== user.role) {
            return res.status(400).json({ message: "Role mismatch.", success: false });
        }

        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

        return res.status(200)
            .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "strict" })
            .json({ message: `Welcome back, ${user.fullname}`, user, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

// Profile update
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const userId = req.userId; // Middleware should set req.userId

        if (!fullname || !email || !phoneNumber || !bio || !skills) {
            return res.status(400).json({ message: "Something is missing", success: false });
        }

        const skillsArray = skills.split(",");
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found.", success: false });
        }

        user.fullname = fullname;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.profile.bio = bio;
        user.profile.skills = skillsArray;

        await user.save();

        res.status(200).json({ message: "Profile updated successfully.", user, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};
