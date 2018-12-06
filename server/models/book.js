const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    review: {
      type: String,
      default: "n/a"
    },
    pages: {
      type: String,
      default: "n/a"
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    price: {
      type: Number,
      default: 0
    },
    OwnerID: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
