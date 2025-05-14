"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res) => {
    res.status(404).send("Route not found");
});
const PORT = process.env.PORT || 3000;
if (!process.env.MONGODB_URI) {
    throw Error("Missing connection string");
}
mongoose_1.default
    .connect(process.env.MONGODB_URI, { dbName: "Latino_Store" })
    .then(() => {
    console.log("Conected to Mongo DB 'Latino_Store'");
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
})
    .catch(err => {
    console.error(err);
    throw err;
});
