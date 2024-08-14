require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { db } = require("./db/db")
const transactionRouter = require("./routes/transactions")

const app = express()

const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.get("/", (req, res) => {
  res.status(200).json("Hello")
})
app.use("/api/transactions", transactionRouter)

const server = () => {
  db()
  app.listen(PORT, () => {
    console.log("listening to port", PORT)
  })
}

server()
