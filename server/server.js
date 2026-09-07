const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
require("dotenv").config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Delicacy API is running",
  });
});

// Product routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, () => {
  console.log(
    `Delicacy API running on http://localhost:${PORT}`
  );
});