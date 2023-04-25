const Author = require("./model");
// Importing Book as we are searching that table along with Author
const Book = require("../books/model");

// Add Author
const addAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        console.log(newAuthor);
        res.status(201).json({message: "Success: Author added", author: newAuthor})
    } catch (error) {
        console.log(error);
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// Find Author
const getAuthorAndBooks = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: {
                authorName: req.params.author
            },
            include: Book,
        });
        console.log(author);
        res.status(200).json({message: "Success: Author found", author: author})
    } catch (error) {
        console.log(error);
        res.status(501).json({errorMessage: error.message, error: error});
    }
};

// Function exports
module.exports = {
    addAuthor,
    getAuthorAndBooks
};
