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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_model_1 = require("../models/products.model");
const router = (0, express_1.Router)();
// Fetch all products
const Getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_model_1.Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "unable ot fetch all students" });
    }
});
// Add a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description, size, image, stock, category } = req.body;
        const product = yield products_model_1.Product.create({ name, price, description, size, image, stock, category });
        res.status(201).json(product);
        console.log(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Unable to add product' });
    }
});
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield products_model_1.Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true // return updated data
        });
        res.status(200).json(products_model_1.Product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to update product" });
    }
});
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield products_model_1.Product.findByIdAndDelete(req.params.id);
        res.status(200).json(student);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to delete product" });
    }
});
const getproductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const product = yield products_model_1.Product.find({
            name: {
                $regex: name,
                $options: 'i'
            }
        });
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to search product" });
    }
});
exports.default = {
    Getall,
    getproductByName,
    deleteProductById,
    createProduct,
    updateProductById
};
