import { Link } from "react-router-dom"
import classes from "./css/about.module.css"

const About = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>
        This application is made for learning purposes...This application is made for learning purposes...This
        application is made for learning purposes...This application is made for learning purposes...This application is
        made for learning purposes...This application is made for learning purposes...This application is made for
        learning purposes...This application is made for learning purposes...
      </p>
      <p>
        <Link to="/" className={classes.home}>
          {" "}
          Home Page
        </Link>
      </p>
    </div>
  )
}
export default About
