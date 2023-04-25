const {Router} = require("express");
const authorRouter = Router();

// Functions import
const {
    addAuthor,
    getAuthorAndBooks

} = require("./controllers");

// Routes/URL
authorRouter.post("/authors/addauthor", addAuthor);
authorRouter.get("/authors/getauthorandbooks/:author", getAuthorAndBooks);

module.exports = authorRouter;
