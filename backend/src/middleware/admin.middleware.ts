import { Request, Response, NextFunction } from "express";

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.isLoggedIn && req.session.isAdmin) {
        return next()
    }
    res.status(403).json({message: "No access to this page"})
}