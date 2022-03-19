import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import classes from "./css/header.module.css"

const Header = ({ title, searchBook }) => {
  const location = useLocation()

  return (
    <div className={classes.container}>
      <h1 className={classes.quote}>{title}</h1>

      {location.pathname === "/" && (
        <input
          type="text"
          placeholder="Search by title / author"
          className={classes.search}
          onChange={(e) => searchBook(e.target.value)}
        ></input>
      )}
      {location.pathname !== "/about" && (
        <p>
          <Link to="/about" className={classes.about}>
            About app
          </Link>
        </p>
      )}
    </div>
  )
}

export default Header
