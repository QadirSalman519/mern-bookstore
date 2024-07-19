import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000
const URI = process.env.MONGO_DB_URI

// Connect to Mongo DB
try {
    mongoose.connect(URI)
    console.log("DB Connected")
} catch (error) {
    console.log("Error",error)
}

app.use("/book",bookRoute)

app.get('/', (req, res) => {
  res.send('Hello AQS!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})