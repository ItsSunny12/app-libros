const Book = require('../models/book');

const getBooks = async (req, res) => {
  const books = await Book.find();

  res.status(200).json({ ok: true, books, count: books.length });
};

const createBook = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      ok: false,
      message: 'el campo nombre del libro es obligatorio',
    });
    return;
  }
  const newBook = new Book(req.body);

  newBook
    .save()
    .then((book) => {
      res.status(201).json({ ok: true, book });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getBooks,
  createBook,
};
