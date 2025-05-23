
//server
import express,  { Request, Response }  from "express";
import productRoutes from "./routes/Product.routes";
import dotenv from "dotenv"; 
dotenv.config();
import cors from "cors";
import mongoose from 'mongoose'
import customerRouter from './routes/Customer.routes';
import cookieSession from 'cookie-session';
import stripeRouter from './routes/Stripe.routes';
import { requireAdmin } from "./middleware/admin.middleware";
import adminRouter from "./routes/Admin.routes";



const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));


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
app.use('/admin', requireAdmin, adminRouter)
app.use('/customers', customerRouter)
app.use("/products", productRoutes)
app.use("/api", stripeRouter);

// Root route
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome to my server');
  });


// Fallback
app.use((req: Request, res: Response) => {
    res.status(404).send("Route not found")
})

  const PORT = process.env.PORT || 3000
  if (!process.env.DATABASE_URI) {
    throw new Error("Missing connection string")
  }
  
  mongoose
    .connect(process.env.DATABASE_URI,{ dbName: "Latino_Store"})
    .then(() => {
      console.log(`Connected to MongoDB`)
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
      })
    })
    .catch(err => {
      console.error(err)
      throw err
    })






