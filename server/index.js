import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import customizeRoutes from "./routes/customizeRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Middleware
app.use(express.json());

// MongoDB connect
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("SmartResume Backend is working");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/resume", protect, resumeRoutes);
app.use("/api/customize-resume", protect, customizeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT ${PORT}`);
});
