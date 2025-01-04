// index.js
import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './utils/db.js';
import jobRoutes from './routes/job.route.js';
import candidateRoutes from './routes/candidate.route.js';



// Load environment variables
config();

// Verify if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in .env file.');
  process.exit(1);
}

// Connect to MongoDB
connectDB();

const app = express();
app.use(json());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/candidates', candidateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

