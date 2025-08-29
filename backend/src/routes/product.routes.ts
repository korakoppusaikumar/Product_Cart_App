import { Router } from 'express';
import * as productController from '../controllers/product.controller';
// import { authMiddleware } from '../middlewares/auth.middleware';


const router = Router();

router.get('/', productController.getAllProducts); // Get all products
router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.get('/reports/:id', productController.getReport);

export default router;
