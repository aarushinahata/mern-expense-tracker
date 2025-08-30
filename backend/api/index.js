const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("../config/db");
const authRoutes = require("../routes/authRoutes");
const incomeRoutes = require("../routes/incomeRoutes");
const expenseRoutes = require("../routes/expenseRoutes");
const dashboardRoutes = require("../routes/dashboardRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// Static files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    message: "Backend is working!", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Expense Tracker API", 
    version: "1.0.0",
    status: "running"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "Something went wrong!", 
    error: process.env.NODE_ENV === "development" ? err.message : "Internal server error"
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
module.exports.handler = serverless(app);