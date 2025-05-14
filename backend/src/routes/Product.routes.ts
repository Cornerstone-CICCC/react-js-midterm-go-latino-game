import {Router} from 'express';
import router from '../controllers/product.controller'


const ProductRouter = Router();
const ProductController = router 


ProductRouter.get('/', ProductController.Getall);
ProductRouter.post('/createProduct', ProductController.createProduct);
ProductRouter.delete('/:id', ProductController.deleteProductById);

export default ProductRouter