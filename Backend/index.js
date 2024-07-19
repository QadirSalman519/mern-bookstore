import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()
app.use(cors())
app.use(express.json())

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
app.use("/user",userRoute)

app.get('/', (req, res) => {
  res.send('Hello AQS!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})