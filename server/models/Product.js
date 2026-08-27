const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    discount: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);