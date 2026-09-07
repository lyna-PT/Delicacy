require("dotenv").config();

const connectDB = require("./config/db");
const Category = require("./models/Category");

const categories = [
  {
    image: "cate1.png",
    name: "Fruits",
    count: "22 Items",
    colorClass: "box1",
  },
  {
    image: "cate2.png",
    name: "Vegetables",
    count: "22 Items",
    colorClass: "box2",
  },
  {
    image: "cate3.png",
    name: "Drinks",
    count: "22 Items",
    colorClass: "box3",
  },
  {
    image: "cate4.png",
    name: "Fresh Nuts",
    count: "22 Items",
    colorClass: "box4",
  },
  {
    image: "cate5.png",
    name: "Spices",
    count: "22 Items",
    colorClass: "box5",
  },
];

const seedCategories = async () => {
  try {
    await connectDB();

    await Category.deleteMany();

    await Category.insertMany(categories);

    console.log("Categories successfully added to MongoDB");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
};

seedCategories();