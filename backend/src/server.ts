//server
import express,  { Request, Response }  from "express";
import productRoutes from "./routes/Product.routes";
import dotenv from "dotenv"; 
dotenv.config();
import cors from "cors";
import mongoose from 'mongoose'

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

// Root route
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome to my server');
  });

app.use((req: Request, res: Response) => {
    res.status(404).send('Invalid route!')
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

