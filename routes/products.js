
import express from 'express';
import productsController from '../controller/products.js';

const router = express.Router();


router.get('/', productsController.getMany);
router.post('/', productsController.addProduct);
router.put('/:prodID', productsController.editProduct);
router.get('/:prodID', productsController.haveSingle);
router.delete('/:prodID', productsController.deleteItem);

export default router; 
