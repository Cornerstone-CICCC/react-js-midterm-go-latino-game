import { Router } from "express";
import CustomerController from "../controllers/Customer.controller";

const customerRouter = Router()

customerRouter.post('/', CustomerController.createCustomer)
customerRouter.delete("/:id", CustomerController.deleteCustomer)
customerRouter.put("/:id", CustomerController.updateCustomer)
customerRouter.get("/:id", CustomerController.getCustomerById)


export default customerRouter