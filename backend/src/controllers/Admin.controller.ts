import express, { Request, Response } from 'express'

const adminCheckSession = async (req: Request, res: Response) => {
  const session = req.session
  if (session?.isLoggedIn) {
    res.status(200).json({
      isLoggedIn: true,
      email: session.email,
      isAdmin: session.isAdmin,
    })
  } else {
    res.status(401).json({ isLoggedIn: false })
  }
}

export default {adminCheckSession}