"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//server
const express_1 = __importDefault(require("express"));
const Product_routes_1 = __importDefault(require("./routes/Product.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const Customer_routes_1 = __importDefault(require("./routes/Customer.routes"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const Stripe_routes_1 = __importDefault(require("./routes/Stripe.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
const SIGN_KEY = process.env.COOKIE_SIGNIN_KEY;
const ENCRYPT_KEY = process.env.COOKIE_ENCRYPT_KEY;
if (!SIGN_KEY || !ENCRYPT_KEY) {
    throw new Error("Missing cookie keys!");
}
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: [SIGN_KEY, ENCRYPT_KEY]
}));
app.use(express_1.default.json());
// Routes
app.use('/customers', Customer_routes_1.default);
app.use("/products", Product_routes_1.default);
app.use("/api", Stripe_routes_1.default);
// Root route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server');
});
// Fallback
app.use((req, res) => {
    res.status(404).send("Route not found");
});
const PORT = process.env.PORT || 3000;
if (!process.env.DATABASE_URI) {
    throw new Error("Missing connection string");
}
mongoose_1.default
    .connect(process.env.DATABASE_URI, { dbName: "Latino_Store" })
    .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
    .catch(err => {
    console.error(err);
    throw err;
});
