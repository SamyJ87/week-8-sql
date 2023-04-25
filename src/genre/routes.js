const {Router} = require("express");
const genreRouter = Router();

// Functions import
const {
    addGenre,
    getAllBooks,

} = require("./controllers");

// Routes/URL
genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooks);

module.exports = genreRouter;