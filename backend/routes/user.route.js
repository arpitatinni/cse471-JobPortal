import express from "express";
import { register, login, logout, updateProfile } from "../models/controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// User Registration Route
router.post("/register", singleUpload, register);

// User Login Route
router.post("/login", login);

// User Logout Route (requires authentication)
router.get("/logout", isAuthenticated, logout);

// Update Profile Route (requires authentication and file upload)
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);

export default router;
