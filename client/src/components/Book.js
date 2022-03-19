import classes from "./css/book.module.css"

const Book = ({ id, title, author, onDelete }) => {
  return (
    <div className={classes.book}>
      <h1 className={classes.book_title}>{title.toUpperCase()}</h1>
      <h2 className={classes.book_author}>{author}</h2>
      <button className={classes.delete} onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  )
}

export default Book
