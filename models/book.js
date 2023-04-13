const mongoose = require('mongoose');
const booksSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;
