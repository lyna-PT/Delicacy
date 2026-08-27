require("dotenv").config();

const connectDB = require("./config/db");
const Product = require("./models/Product");

const products = [
  {
    image: "p1.png",
    name: "Farm fresh organic fruits 250g",
    price: "$7.99",
    category: "Fresh Items",
    discount: "-25%",
  },
  {
    image: "p2.png",
    name: "Farm fresh organic fruits 250g",
    price: "$7.99",
    category: "Fresh Items",
    discount: "-25%",
  },
  {
    image: "p5.png",
    name: "Farm fresh organic fruits 250g",
    price: "$7.99",
    category: "Fresh Items",
    discount: "-25%",
  },
  {
    image: "p4.png",
    name: "Farm fresh organic fruits 250g",
    price: "$7.99",
    category: "Fresh Items",
    discount: "-25%",
  },
  {
    image: "p3.png",
    name: "Farm fresh organic Vegetables 250g",
    price: "$7.99",
    category: "Fresh Items",
    discount: "-25%",
  },
  {
    image: "p6.png",
    name: "Farm fresh organic Vegetables 250g",
    price: "$7.99",
    category: "Fresh Items",
    discount: "-25%",
  },
];

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products successfully added to MongoDB");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();