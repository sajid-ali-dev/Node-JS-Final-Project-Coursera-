import { Router } from "express";
import * as booksController from "../controllers/books.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", booksController.getAllBooks);                      // GET /api/books
router.get("/isbn/:isbn", booksController.getBookByISBN);         // GET /api/books/isbn/:isbn
router.get("/author/:author", booksController.getBooksByAuthor);  // GET /api/books/author/:author
router.get("/title/:title", booksController.getBooksByTitle);     // GET /api/books/title/:title
router.get("/review/:isbn", booksController.getBookReviews);      // GET /api/books/review/:isbn

// Protected routes for reviews
router.put("/review/:isbn", auth, booksController.upsertReview);   // PUT /api/books/review/:isbn
router.delete("/review/:isbn", auth, booksController.deleteReview);// DELETE /api/books/review/:isbn

export default router;
