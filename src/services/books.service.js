import * as booksRepo from "../repositories/books.repository.js";

export const getAllBooks = async () => {
  return await booksRepo.getAll();
};

export const getBookByISBN = async (isbn) => {
  const book = await booksRepo.getByISBN(isbn);
  if (!book) throw { status: 404, message: "Book not found" };
  return book;
};

export const getBooksByAuthor = async (author) => {
  return await booksRepo.findByAuthor(author);
};

export const getBooksByTitle = async (title) => {
  return await booksRepo.findByTitle(title);
};

export const getBookReviews = async (isbn) => {
  const book = await booksRepo.getByISBN(isbn);
  if (!book) throw { status: 404, message: "Book not found" };
  return book.reviews || {};
};

export const addOrUpdateReview = async (isbn, username, review) => {
  return await booksRepo.upsertReview(isbn, username, review);
};

export const removeReview = async (isbn, username) => {
  return await booksRepo.deleteReview(isbn, username);
};
