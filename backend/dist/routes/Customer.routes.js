"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Customer_controller_1 = __importDefault(require("../controllers/Customer.controller"));
const customerRouter = (0, express_1.Router)();
customerRouter.post('/', Customer_controller_1.default.createCustomer);
customerRouter.delete("/:id", Customer_controller_1.default.deleteCustomer);
customerRouter.put("/:id", Customer_controller_1.default.updateCustomer);
customerRouter.get("/:id", Customer_controller_1.default.getCustomerById);
customerRouter.post('/logout', Customer_controller_1.default.logoutCustomer);
customerRouter.get('/', Customer_controller_1.default.getAllCustomers);
customerRouter.post('/login', Customer_controller_1.default.loginCustomer);
exports.default = customerRouter;
