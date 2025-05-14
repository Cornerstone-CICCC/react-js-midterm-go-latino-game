"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_Model_1 = require("../models/Customer.Model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, age, email, password } = req.body;
        // find if email already used
        const foundCustomer = yield Customer_Model_1.Customer.exists({ email });
        if (foundCustomer) {
            res.status(400).json({ message: "This email is already registered." });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 12);
        const customer = yield Customer_Model_1.Customer.create({
            id: (0, uuid_1.v4)(),
            firstname,
            lastname,
            age,
            email,
            password: hashedPassword
        });
        res.status(201).json({ message: "User account created successfully", customer });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to create customer account" });
    }
});
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield Customer_Model_1.Customer.find();
        res.status(200).json(customers);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to catch customers" });
    }
});
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield Customer_Model_1.Customer.findById(req.params.id);
        if (!customer) {
            res.status(404).json({ message: "This account does not exist" });
            return;
        }
        res.status(200).json({ message: "Your profile information is:", customer });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to browse customer account" });
    }
});
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield Customer_Model_1.Customer.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Customer account deleted", customer });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to delete customer account" });
    }
});
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, age, password } = req.body;
        const editedCustomer = { firstname, lastname, age };
        if (password) {
            editedCustomer.password = yield bcrypt_1.default.hash(password, 12);
        }
        const customer = yield Customer_Model_1.Customer.findByIdAndUpdate(req.params.id, editedCustomer, { new: true });
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
            return;
        }
        res.status(201).json({
            message: "Customer account successfully updated",
            updatedInfo: customer
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to update customer account" });
    }
});
const loginCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(404).json({ message: "missing account information" });
    }
    try {
        const customer = yield Customer_Model_1.Customer.findOne({ email });
        if (!customer) {
            res.status(404).json({ message: "Incorrect account details" });
            return;
        }
        const correctPassword = yield bcrypt_1.default.compare(password, customer.password);
        if (!correctPassword) {
            res.status(401).json({ message: "Incorrect account details" });
            return;
        }
        if (!req.session) {
            res.status(500).json({ message: "Error initializing session" });
            return;
        }
        if (correctPassword) {
            req.session.isLoggedIn = true;
        }
        res.status(200).json({ message: 'customer logged in succesfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to login customer" });
    }
});
const logoutCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session = null;
    res.status(200).json({ message: "Logged out" });
});
exports.default = {
    createCustomer,
    deleteCustomer,
    updateCustomer,
    getCustomerById,
    getAllCustomers,
    loginCustomer,
    logoutCustomer
};

