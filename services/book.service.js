const httpStatus = require('http-status');
const Book = require('../data/book.data');
const ApiError = require('../utils/ApiError');

/**
 * Create a book
 * @param {Object} bookBody
 * @returns {Promise<Book>}
 */

const createBook = async (bookBody) => {
  let tempBook = [...Book]
  tempBook.push(bookBody)
  Book = tempBook
  return true;
};


const getAllBook = async () => {
  return Book;
};

/**
 * Get book by id
 * @param {ObjectId} id
 * @returns {Promise<Book>}
 */
const getBookById = async (id) => {
  return Book.find(({ id }) => id == id)
};


const getBookByTitle = async (title) => {
  return Book.find(({ title }) => title === title);
};

/**
 * Update book by id
 * @param {ObjectId} bookId
 * @param {Object} updateBody
 * @returns {Promise<Book>}
 */

const updateBookById = async (bookId, updateBody) => {
  let tempBook = [...Book]
  let newBook = tempBook.map((item) => (item.id === bookId ? { ...item, ...updateBody } : item))
  Book = newBook
  return true

};

/**
 * Delete book by id
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const deleteBookById = async (bookId) => {
  let tempBook = [...Book]
  let ind = tempBook.findIndex(({ id }) => id === bookId)
  tempBook.splice(ind, 1)
  Book = tempBook
  return true
};

module.exports = {
  createBook,
  getBookById,
  getBookByTitle,
  updateBookById,
  deleteBookById,
  getAllBook
};
