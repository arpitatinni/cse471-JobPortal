import Candidate from '../models/Candidate.js';
import Job from '../models/Job.js';

// Register Candidate
export const registerCandidate = async (req, res) => {
  try {
    const newCandidate = new Candidate(req.body);
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Candidate Profile
export const updateProfile = async (req, res) => {
  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Applied Jobs
export const getAppliedJobs = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id).populate('appliedJobs');
    res.status(200).json(candidate.appliedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Job Match Notifications
export const getMatchedJobs = async (req, res) => {
  try {
    const { skills } = await Candidate.findById(req.params.id);
    const matchedJobs = await Job.find({ skillsRequired: { $in: skills } });
    res.status(200).json(matchedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
