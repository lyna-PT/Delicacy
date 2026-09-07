const express = require("express");

const Review = require("../models/Review");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();

    res.json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
    });
  }
});

module.exports = router;