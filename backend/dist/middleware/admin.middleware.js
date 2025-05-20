"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = void 0;
const requireAdmin = (req, res, next) => {
    var _a;
    if (((_a = req.session) === null || _a === void 0 ? void 0 : _a.isLoggedIn) && req.session.isAdmin) {
        return next();
    }
    res.status(403).json({ message: "No access to this page" });
};
exports.requireAdmin = requireAdmin;
