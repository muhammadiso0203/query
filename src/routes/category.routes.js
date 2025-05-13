import { Router } from "express";
import { CategoryController } from "../controller/category.controller.js";

const router = Router();
const controller = new CategoryController();

router
    .post('/', controller.createCategory)
    .get('/', controller.getAllCategory)
    .get('/', controller.getCategoryById)
    .put('/:id', controller.updateCategoryById)
    .delete('/:id', controller.deleteCategoryById)

export default router;