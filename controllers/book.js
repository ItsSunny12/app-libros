const Book = require('../models/book');

const getBooks = async (req, res) => {
  const books = await Book.find();

  res.status(200).json({ ok: true, data: books.length });
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
    .then((product) => {
      res.status(201).json({ ok: true, product });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getBooks,
  createBook,
};
