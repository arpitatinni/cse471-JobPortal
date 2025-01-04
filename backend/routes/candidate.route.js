import express from 'express';
import {
  registerCandidate,
  updateProfile,
  getAppliedJobs,
  getMatchedJobs,
} from '../controllers/candidateController.js'; // Ensure the correct path and .js extension

const router = express.Router();

router.post('/register', registerCandidate);
router.put('/update/:id', updateProfile);
router.get('/applied-jobs/:id', getAppliedJobs);
router.get('/matched-jobs/:id', getMatchedJobs);

// Export the router as the default export
export default router;
