"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Admin_controller_1 = __importDefault(require("../controllers/Admin.controller"));
const adminRouter = (0, express_1.Router)();
adminRouter.get('/', Admin_controller_1.default.adminCheckSession);
exports.default = adminRouter;
