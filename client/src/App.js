import "./App.css"
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Book from "./components/Book"
import Header from "./components/Header"
import AddBook from "./components/AddBook"
import About from "./components/About"

const getAllBooks = () => {
  return fetch("http://localhost:5000/books").then((res) => res.json())
}

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAllBooks().then((data) => {
      setBooks(data)
    })
  }, [])

  const deleteBook = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        setBooks(books.filter((book) => book.id !== id))
      }
    })
  }

  const addBook = (title, author) => {
    fetch(`http://localhost:5000/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks([...books, data])
      })
  }

  const searchBook = (word) => {
    getAllBooks().then((books) => {
      setBooks(
        books.filter((book) => {
          return (
            book.title.toLowerCase().includes(word.toLowerCase()) ||
            book.author.toLowerCase().includes(word.toLowerCase())
          )
        })
      )
    })
  }

  return (
    <>
      <Header title="The world belongs to those who read!" searchBook={searchBook} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AddBook addBook={addBook} />
              <div className="books_container">
                {books.map(({ id, title, author }) => (
                  <Book key={id} id={id} title={title} author={author} onDelete={deleteBook} />
                ))}
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
