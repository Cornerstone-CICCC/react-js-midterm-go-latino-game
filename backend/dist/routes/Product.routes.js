"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const ProductRouter = (0, express_1.Router)();
const ProductController = product_controller_1.default;
ProductRouter.get('/', ProductController.Getall);
ProductRouter.post('/createProduct', ProductController.createProduct);
ProductRouter.delete('/:id', ProductController.deleteProductById);
exports.default = ProductRouter;
