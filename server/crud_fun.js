const fs = require("fs")
const { v4: uuid } = require("uuid")

const getAllBooks = () => {
  return JSON.parse(fs.readFileSync("books.json"))
}

const createBook = (book) => {
  const books = JSON.parse(fs.readFileSync("books.json"))
  const newBook = { ...book, id: uuid() }
  books.push(newBook)

  fs.writeFileSync("books.json", JSON.stringify(books, null, 2))
  return newBook
}

const deleteBook = (id) => {
  const books = JSON.parse(fs.readFileSync("books.json"))
  const newBooks = books.filter((book) => book.id != id)

  fs.writeFileSync("books.json", JSON.stringify(newBooks, null, 2))
  return books.length > newBooks.length
}

module.exports = { getAllBooks, createBook, deleteBook }
