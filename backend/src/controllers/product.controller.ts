import { Router, Request, Response } from "express";
import { Product, Iproduct } from "../models/products.model";

const router = Router();

// Fetch all products
const Getall = async (req: Request, res: Response) => {
  try{
 const products = await Product.find()
  res.status(200).json(products)
 }catch (error){
  console.error(error)
  res.status(500).json({ message: "unable ot fetch all students"})
 }
};

// Add a new product
const createProduct = async (req: Request<{}, {}, Iproduct>, res: Response) => {
  try {
    const { name, price, description } = req.body
    const product = await Product.create({ name, price, description })
    res.status(201).json(product)
    console.log(product)  
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Unable to add product' })
  }
}


const deleteProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const student = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(student)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to delete product" })
  }
}

export default {
  Getall,
  deleteProductById,
  createProduct,
};