import fileStore from "../models/fileStore.js";

const FILE = "books.json";

export const getAll = async () => {
  const data = await fileStore.readJson(FILE);
  // store books as object keyed by isbn
  return data;
};

export const getByISBN = async (isbn) => {
  const data = await fileStore.readJson(FILE);
  return data[isbn] ?? null;
};

export const findByAuthor = async (author) => {
  const data = await fileStore.readJson(FILE);
  return Object.values(data).filter(b => b.author.toLowerCase() === author.toLowerCase());
};

export const findByTitle = async (title) => {
  const data = await fileStore.readJson(FILE);
  return Object.values(data).filter(b => b.title.toLowerCase() === title.toLowerCase());
};

export const upsertReview = async (isbn, username, review) => {
  const data = await fileStore.readJson(FILE);
  if (!data[isbn]) throw new Error("BOOK_NOT_FOUND");
  data[isbn].reviews = data[isbn].reviews || {};
  data[isbn].reviews[username] = review;
  await fileStore.writeJson(FILE, data);
  return data[isbn].reviews;
};

export const deleteReview = async (isbn, username) => {
  const data = await fileStore.readJson(FILE);
  if (!data[isbn]) throw new Error("BOOK_NOT_FOUND");
  if (data[isbn].reviews) delete data[isbn].reviews[username];
  await fileStore.writeJson(FILE, data);
  return data[isbn].reviews || {};
};
