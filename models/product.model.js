const { Timestamp } = require("mongodb");
const mongoose = require(`mongoose`);
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("product", ProductSchema); // Corrected mongoose spelling

module.exports = Product;


