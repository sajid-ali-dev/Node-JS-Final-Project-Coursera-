import axios from "axios";
const BASE = "http://localhost:3000/api";

export const task10_getAllBooks_Callback = () => {
  axios.get(`${BASE}/books`)
    .then(res => console.log("Task10 - All books:", res.data))
    .catch(err => console.error("Task10 Error:", err.response?.data || err.message));
};

export const task11_getByISBN_Promise = (isbn) => {
  return axios.get(`${BASE}/books/isbn/${isbn}`)
    .then(res => {
      console.log("Task11 - Book:", res.data);
      return res.data;
    })
    .catch(err => {
      console.error("Task11 Error:", err.response?.data || err.message);
      throw err;
    });
};

export const task12_getByAuthor_Async = async (author) => {
  try {
    const res = await axios.get(`${BASE}/books/author/${encodeURIComponent(author)}`);
    console.log("Task12 - Books by author:", res.data);
    return res.data;
  } catch (err) {
    console.error("Task12 Error:", err.response?.data || err.message);
    throw err;
  }
};

export const task13_getByTitle_Async = async (title) => {
  try {
    const res = await axios.get(`${BASE}/books/title/${encodeURIComponent(title)}`);
    console.log("Task13 - Books by title:", res.data);
    return res.data;
  } catch (err) {
    console.error("Task13 Error:", err.response?.data || err.message);
    throw err;
  }
};

// Example usage
// task10_getAllBooks_Callback();
// task11_getByISBN_Promise("9780143127796");
// await task12_getByAuthor_Async("Alice");
// await task13_getByTitle_Async("Example Book One");
