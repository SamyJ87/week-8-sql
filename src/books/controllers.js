const Book = require("./model");

// =====Add a book=====
const addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        console.log(book);
        res.status(201).json({message: "Success: new book added", newBook: book});
    } catch (error) {
        console.log(error);
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// =====Find all books=====
const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.findAll({});
        // console.log(allBooks);
        res.status(200).json({message: "Success: All books found", books: allBooks});
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// =====Find specific book / Require params=====
const getSingleBookByTitle = async (req, res) => {
    try {
        const getBook = await Book.findOne({
            where: {
                title: req.params.title
            }
        });
        console.log(getBook);
        res.status(200).json({message: "Success: book found", book: getBook});
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// =====Update a book dynamically=====
const updateBook = async (req, res) => {
    try {
        const updatedObj = await Book.update({[req.body.updateKey]: req.body.updateValue}, {
            where: {
                title: req.body.title
            }
        });
        console.log(updatedObj);
        res.status(201).json({message: "Success: Book updated", updateResult: updatedObj});
    } catch (error) {
        console.log(error);
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// =====Delete a book by title=====
const deleteBook = async (req, res) => {
    try {
        const deleteABook = await Book.destroy({
            where: {
                title: req.body.title
            }
        });
        console.log(deleteABook)
        res.status(201).json({message: "Success: All deleted", result: deleteABook});
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// =====DELETE EVERYTHING=====
const deleteAllBooks = async (req, res) => {
    try {
        const deleteAll = await Book.destroy({
            truncate: true
        });
        res.status(202).json({message: "Success: All deleted", result: deleteAll});
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// Function exports
module.exports = {
    addBook,
    getAllBooks,
    getSingleBookByTitle,
    updateBook,
    deleteBook,
    deleteAllBooks,
};
