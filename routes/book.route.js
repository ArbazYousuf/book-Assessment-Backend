const express = require('express');
const validate = require('../middlewares/validate');
const bookValidation = require('../validations/book.validation');
const bookController = require('../controllers/book.controller');


const router = express.Router();

router.route("/")
    .post(validate(bookValidation.createBook), bookController.createBook)
    .get(bookController.getBooks)
    .put(validate(bookValidation.updateBook), bookController.updateBook)
    .delete(validate(bookValidation.updateBook), bookController.deleteBook)



module.exports = router;