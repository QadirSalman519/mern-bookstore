import Book from "../model/book.model.js";

export const getBook = (req, resp) => {
    try {
        const book = Book.find()
        resp.status(200).json(book)
    } catch (error) {
        console.log(error)
        resp.status(500).json(error)
    }
}