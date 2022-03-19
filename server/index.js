var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var { getAllBooks, createBook, deleteBook } = require("./crud_fun")

var app = express()
var port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/books", (req, res) => {
  res.send(getAllBooks())
})

app.post("/create", (req, res) => {
  const book = createBook(req.body)
  res.status(200).send(book)
})

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params

  if (deleteBook(id)) {
    res.status(200).send()
  } else {
    res.status(404).send({
      msg: "Book not found",
    })
  }
})

app.listen(port, function () {
  console.log("app is live on port: " + port)
})
