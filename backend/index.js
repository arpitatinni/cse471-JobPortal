import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

// API routes
app.use("/api/v1/user", userRouter);

// Server connection
app.listen(PORT, () => {
    connectDB(); // Connect to MongoDB Atlas
    console.log(`Server running at port ${PORT}`);
});
