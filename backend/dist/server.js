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
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/products", Product_routes_1.default);
// Root route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server');
});
app.use((req, res) => {
    res.status(404).send('Invalid route!');
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
