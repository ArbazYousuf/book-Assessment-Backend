const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBook = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        discount: Joi.number().required(),
        cover_img: Joi.string().required(),
        price: Joi.number().required(),
    }),
};

const getBooks = {
    query: Joi.object().keys({
        id: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getBook = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    }),
};

const updateBook = {
    params: Joi.object().keys({
        id: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            discount: Joi.number().required(),
            cover_img: Joi.string().required(),
            price: Joi.number().required(),
        })
        .min(1),
};

const deleteBook = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};
