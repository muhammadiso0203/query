import { Router } from "express";
import { ProductController } from "../controller/product.controller.js";

const router = Router();
const controller = new ProductController();

router
    .post('/', controller.createProduct)
    .get('/', controller.getAllProduct)
    .get('/', controller.getProductByID)
    .put('/:id', controller.updateProductById)
    .delete('/:id', controller.deleteProductById)

export default router;