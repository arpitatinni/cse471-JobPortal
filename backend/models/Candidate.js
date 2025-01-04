import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: [String],
  experience: { type: String, default: '' },
  profileVisibility: { type: Boolean, default: true },
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
});

const Candidate = mongoose.model('Candidate', candidateSchema);

export default Candidate;

