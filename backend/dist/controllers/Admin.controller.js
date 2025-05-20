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
const adminCheckSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = req.session;
    if (session === null || session === void 0 ? void 0 : session.isLoggedIn) {
        res.status(200).json({
            isLoggedIn: true,
            email: session.email,
            isAdmin: session.isAdmin,
        });
    }
    else {
        res.status(401).json({ isLoggedIn: false });
    }
});
exports.default = { adminCheckSession };
