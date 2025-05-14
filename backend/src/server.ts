import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

app.use((req: Request, res: Response) => {
    res.status(404).send("Route not found")
})
const PORT = process.env.PORT || 3000
if (!process.env.MONGODB_URI) {
  throw Error("Missing connection string")
}
mongoose
    .connect(process.env.MONGODB_URI, {dbName: "Latino_Store"})
    .then(() => {
        console.log("Conected to Mongo DB 'Latino_Store'")
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`)
        })
    })
    .catch(err => {
        console.error(err)
        throw err
    })