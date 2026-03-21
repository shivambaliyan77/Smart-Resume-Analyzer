// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";
// import customizeRoutes from "./routes/customizeRoutes.js";
// import { protect } from "./middleware/authMiddleware.js";

// dotenv.config(); // Load variables from .env

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// // app.use(cors());
// const corsOptions = {
//     origin: process.env.CORS_ORIGIN,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization", // We must allow the Authorization header
//     credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Test Route
// app.get("/", (req, res) => {
//   res.send("SmartResume Backend is working");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/uploads", express.static("uploads"));
// app.use("/api/resume", protect, resumeRoutes);
// app.use("/api/customize-resume", protect, customizeRoutes);

// app.listen(PORT, () => {
//   console.log(` Server is running on http://localhost:${PORT}`);
// });

//new index.js

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";
// import customizeRoutes from "./routes/customizeRoutes.js";
// import { protect } from "./middleware/authMiddleware.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // simple CORS allow for development
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Test Route
// app.get("/", (req, res) => {
//   res.send("SmartResume Backend is working");
// });

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/uploads", express.static("uploads"));
// app.use("/api/resume", protect, resumeRoutes);
// app.use("/api/customize-resume", protect, customizeRoutes);

// // Start server
// app.listen(PORT, () => {
//   console.log(` Server is running on http://localhost:${PORT}`);
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";
// import customizeRoutes from "./routes/customizeRoutes.js";
// import { protect } from "./middleware/authMiddleware.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // CORS Fix
// app.use(cors());
// app.use(express.json());

// // MongoDB connect
// connectDB();

// // Test route
// app.get("/", (req, res) => {
//   res.send("SmartResume Backend is working");
// });

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/uploads", express.static("uploads"));
// app.use("/api/resume", protect, resumeRoutes);
// app.use("/api/customize-resume", protect, customizeRoutes);

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on ${PORT}`);
// });

//---deployment---
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

// ✅ FIXED CORS (IMPORTANT)
app.use(
  cors({
    origin: "https://smart-resume-analyzer-lilac.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

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

app.listen(PORT, () => {
  console.log(`🚀 Server is running on ${PORT}`);
});
