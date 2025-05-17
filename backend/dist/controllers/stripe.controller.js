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
exports.createCheckoutSession = void 0;
const stripe_1 = __importDefault(require("stripe"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
const createCheckoutSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { items } = req.body;
        if (!items || !Array.isArray(items)) {
            res.status(400).json({ error: 'Invalid items format' });
            return;
        }
        const line_items = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `${item.name} - Size ${item.size}`, // ✅ Se incluye la talla
                    images: [item.image],
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity || 1,
        }));
        const session = yield stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            locale: 'en',
            line_items,
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });
        res.json({ url: session.url });
    }
    catch (error) {
        console.error('[Stripe Error]', error);
        res.status(500).json({ error: 'Stripe checkout session failed' });
    }
});
exports.createCheckoutSession = createCheckoutSession;
