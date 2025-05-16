import {Router} from 'express';
import router from '../controllers/product.controller'


const ProductRouter = Router();
const ProductController = router 


ProductRouter.get('/', ProductController.Getall);
ProductRouter.post('/create', ProductController.createProduct);
ProductRouter.delete('/:id', ProductController.deleteProductById);
ProductRouter.put('/:id', ProductController.updateProductById);

export default ProductRouter