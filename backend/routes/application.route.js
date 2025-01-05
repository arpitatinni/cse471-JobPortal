import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { 
  applyJob, 
  getApplicants, 
  getAppliedJobs, 
  updateStatus 
} from "../models/controllers/application.controller.js";

const router = express.Router();

// Route to apply for a job by job ID (requires authentication)
router.route("/apply/:id").get(isAuthenticated, applyJob);

// Route to get all jobs the user has applied for (requires authentication)
router.route("/get").get(isAuthenticated, getAppliedJobs);

// Route to get all applicants for a specific job by job ID (requires authentication)
router.route("/:id/applicants").get(isAuthenticated, getApplicants);

// Route to update the application status by application ID (requires authentication)
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
