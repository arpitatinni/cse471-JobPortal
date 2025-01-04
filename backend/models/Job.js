import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number },
  skillsRequired: [String], // Assuming skills required for the job
  postedAt: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
