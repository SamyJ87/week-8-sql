const Genre = require("./model");
const Book = require("../books/model");

// Add genre
const addGenre = async (req, res) => {
    try {
        const newGenre = await Genre.create(req.body);
        console.log(newGenre);
        res.status(201).json({message: "Success: Genre added", genre: newGenre})
    } catch (error) {
        console.log(error);
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// Get all books by genre
const getAllBooks = async (req, res) => {
    try {
        const findGenre = await Genre.findAll({
            where: {
                genre: req.params.genre
            },
            include: Book,
        });
        console.log(findGenre);
        res.status(200).json({message: "Success: All books found", booksByGenre: findGenre})
    } catch (error) {
        console.log(error);
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// Function exports
module.exports = {
    addGenre,
    getAllBooks,
};
