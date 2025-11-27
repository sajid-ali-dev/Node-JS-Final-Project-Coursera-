import * as booksService from "../services/books.service.js";

export const getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();
  return res.json(books);
};

export const getBookByISBN = async (req, res) => {
  const isbn = req.params.isbn;
  const book = await booksService.getBookByISBN(isbn);
  return res.json(book);
};

export const getBooksByAuthor = async (req, res) => {
  const author = req.params.author;
  const books = await booksService.getBooksByAuthor(author);
  return res.json(books);
};

export const getBooksByTitle = async (req, res) => {
  const title = req.params.title;
  const books = await booksService.getBooksByTitle(title);
  return res.json(books);
};

export const getBookReviews = async (req, res) => {
  const isbn = req.params.isbn;
  const reviews = await booksService.getBookReviews(isbn);
  return res.json(reviews);
};

export const upsertReview = async (req, res) => {
  const isbn = req.params.isbn;
  const username = req.user.username;
  const { review } = req.body;
  const reviews = await booksService.addOrUpdateReview(isbn, username, review);
  return res.json({ message: "Review saved", reviews });
};

export const deleteReview = async (req, res) => {
  const isbn = req.params.isbn;
  const username = req.user.username;
  const reviews = await booksService.removeReview(isbn, username);
  return res.json({ message: "Review deleted", reviews });
};
