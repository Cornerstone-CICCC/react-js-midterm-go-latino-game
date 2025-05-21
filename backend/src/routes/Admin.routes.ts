import { Router } from 'express'
import AdminController from '../controllers/Admin.controller'

const adminRouter = Router()

adminRouter.get('/', AdminController.adminCheckSession )

export default adminRouter