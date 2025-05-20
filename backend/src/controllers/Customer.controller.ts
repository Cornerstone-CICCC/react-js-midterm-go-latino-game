import { Request, Response } from "express";
import { Customer, ICustomer } from "../models/Customer.Model";
import bcrypt from 'bcrypt'

const createCustomer = async (req: Request<{}, {}, Omit<ICustomer, 'id'>>, res: Response) => {
    try {
        const { firstname, lastname, age, email, password } = req.body
        // find if email already used
        const foundCustomer = await Customer.exists({ email })
        if (foundCustomer) {
            res.status(400).json({ message: "This email is already registered." })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const customer = await Customer.create({ 
            firstname, 
            lastname, 
            age, 
            email, 
            password: hashedPassword 
        })
        res.status(201).json({message: "User account created successfully",  customer})
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to create customer account"})
    }
}

const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find()
        res.status(200).json(customers)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to catch customers"})
    }
}

const getCustomerById = async (req: Request<{id: string}>, res: Response) => {
    try {
        const customer = await Customer.findById(req.params.id)
        if(!customer) {
            res.status(404).json({message: "This account does not exist"})
            return
        }
        res.status(200).json({message: "Your profile information is:", customer})
    }
    catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to browse customer account"})
    }
}

const deleteCustomer = async (req: Request<{id: string}>, res: Response) => { 
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Customer account deleted", customer})
    }
    catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to delete customer account"})
    }
}

const updateCustomer = async (req: Request<{id: string}, {}, Partial<ICustomer>>, res: Response) => {
    try{
        const { firstname, lastname, age, password } = req.body
        const editedCustomer: Partial<ICustomer> = { firstname, lastname, age }
        if (password) {
            editedCustomer.password = await bcrypt.hash(password, 12)
        }
        const customer = await Customer.findByIdAndUpdate(req.params.id, editedCustomer, { new: true})
        
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' })
            return
        }

        res.status(201).json({
            message: "Customer account successfully updated",
            updatedInfo: customer
        })

    }
    catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to update customer account" })
    }
}

const loginCustomer = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if(!email || !password) {
        res.status(404).json({message: "missing account information"})
    }
    try {
        const customer = await Customer.findOne({email})
        if(!customer) {
            res.status(404).json({message: "Incorrect account details"})
            return
        }
        const correctPassword = await bcrypt.compare(password, customer.password)
        if (!correctPassword) {
            res.status(401).json({message: "Incorrect account details"})
            return
        }
        if(!req.session) {
            res.status(500).json({message: "Error initializing session"})
            return
        }
        if (correctPassword) {
            req.session.isLoggedIn = true
        }

        res.status(200).json({message:  'customer logged in succesfully'})
    }
    catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to login customer"})
    }
}

const logoutCustomer = async (req: Request, res: Response) => {
    req.session = null
    res.status(200).json({message: "Logged out"})    
}


export default {
    createCustomer,
    deleteCustomer,
    updateCustomer,
    getCustomerById,
    getAllCustomers,
    loginCustomer,
    logoutCustomer
}