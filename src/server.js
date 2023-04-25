require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5001;

const Book = require("./books/model");
const bookRouter = require("./books/routes");
const Genre = require("./genre/model");
const genreRouter = require("./genre/routes");
const Author = require("./authors/model");
const authorRouter = require("./authors/routes");

const app = express();
app.use(express.json());

const syncTables = () => {
    // NO 1824
    Author.hasMany(Book);
    Book.belongsTo(Author);
    
    Genre.hasMany(Book);
    Book.belongsTo(Genre);
    
    Book.sync();
    Author.sync();
    Genre.sync();
// {alter: true} to update tables/model after initial creation
};

app.use(bookRouter,
    authorRouter,
    genreRouter
    );

app.use("/health", (req, res) => 
    res.status(200).json({message: "API is working"})
);

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
});