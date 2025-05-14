import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import customerRouter from './routes/Customer.routes'
import cookieSession from 'cookie-session'

const app = express()


const SIGN_KEY = process.env.COOKIE_SIGNIN_KEY
const ENCRYPT_KEY = process.env.COOKIE_ENCRYPT_KEY
if (!SIGN_KEY || !ENCRYPT_KEY) {
  throw new Error("Missing cookie keys!")
}
app.use(cookieSession({
    name: 'session',
    keys: [SIGN_KEY, ENCRYPT_KEY]
}))
app.use(express.json())


// Routes
app.use('/customers', customerRouter)

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