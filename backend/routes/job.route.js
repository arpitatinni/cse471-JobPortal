import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../models/controllers/job.controller.js";

const router = express.Router();

// Route to post a new job (requires authentication)
router.route("/post").post(isAuthenticated, postJob);

// Route to get all jobs (requires authentication)
router.route("/get").get(isAuthenticated, getAllJobs);

// Route to get admin-specific jobs (requires authentication)
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

// Route to get a job by its ID (requires authentication)
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
