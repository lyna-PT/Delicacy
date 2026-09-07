require("dotenv").config();

const connectDB = require("./config/db");
const Review = require("./models/Review");

const reviews = [
  {
    image: "c1.png",
    name: "Ethan Smith",
  },
  {
    image: "c2.jpg",
    name: "Ethan Smith",
  },
  {
    image: "c3.jpg",
    name: "Ethan Smith",
  },
];

const seedReviews = async () => {
  try {
    await connectDB();

    await Review.deleteMany();
    await Review.insertMany(reviews);

    console.log("Reviews successfully added to MongoDB");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding reviews:", error);
    process.exit(1);
  }
};

seedReviews();