"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_controller_1 = require("../controllers/stripe.controller");
const router = express_1.default.Router();
// POST /api/checkout
router.post('/checkout', stripe_controller_1.createCheckoutSession);
exports.default = router;
