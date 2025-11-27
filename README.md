# Book Review App 

## Setup
1. `git clone <repo>`
2. `cp .env.example .env` and fill secrets
3. `npm install`
4. `npm run dev` (requires nodemon) or `npm start`

API base: `http://localhost:3000/api`

Endpoints:
- `POST /api/auth/register` { username, password }
- `POST /api/auth/login` => returns token
- `GET /api/books`
- `GET /api/books/isbn/:isbn`
- `GET /api/books/author/:author`
- `GET /api/books/title/:title`
- `GET /api/books/review/:isbn`
- `PUT /api/books/review/:isbn` (protected) { review }
- `DELETE /api/books/review/:isbn` (protected)

Client examples in `src/client/client.js`.

## Notes
- This uses JSON file storage in `/data`. Swap repository implementation to use a DB (Postgres/Mongo) in `src/repositories/*` for production.
- Add tests in `__tests__` using `jest` + `supertest`.
