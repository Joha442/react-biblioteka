import { useState } from "react"
import classes from "./css/addbook.module.css"

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  return (
    <div className={classes.form}>
      <div className={classes.add_book}>
        <label className={classes.label}>Book</label>
        <input type="text" placeholder="Add Book" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={classes.add_book}>
        <label className={classes.label}>Author</label>
        <input type="text" placeholder="Add author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button
        className={classes.add_btn}
        onClick={() => {
          addBook(title, author)
          setTitle("")
          setAuthor("")
        }}
        disabled={title === "" || author === ""}
      >
        ADD BOOK
      </button>
    </div>
  )
}

export default AddBook
