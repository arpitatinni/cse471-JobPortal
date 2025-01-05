import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { 
  getCompany, 
  getCompanyById, 
  registerCompany, 
  updateCompany 
} from "../models/controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// Route to register a new company (requires authentication)
router.post("/register", isAuthenticated, registerCompany);

// Route to get all companies (requires authentication)
router.get("/get", isAuthenticated, getCompany);

// Route to get a specific company by ID (requires authentication)
router.get("/get/:id", isAuthenticated, getCompanyById);

// Route to update a company by ID (requires authentication and file upload)
router.put("/update/:id", isAuthenticated, singleUpload, updateCompany);

export default router;
