const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookService } = require('../services');

const createBook = catchAsync(async (req, res) => {
    const book = await bookService.createBook(req.body);
    res.status(httpStatus.CREATED).send(book);
});

const getBooks = catchAsync(async (req, res) => {
    const result = await bookService.getAllBook();
    res.send(result);
});



const getBook = catchAsync(async (req, res) => {
    const book = await bookService.getBookById(req.params.bookId);
    if (!book) {
        throw new ApiError(httpStatus.NOT_FOUND, 'book not found');
    }
    res.send(book);
});

const updateBook = catchAsync(async (req, res) => {
    const book = await bookService.updateBookById(req.params.bookId, req.body);
    res.send(book);
});

const deleteBook = catchAsync(async (req, res) => {
    await bookService.deleteBookById(req.params.bookId);
    res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};
