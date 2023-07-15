import express from "express";
import { addProduct,allProduct,deleteProduct,updateProduct } from "../controllers/product.js";

const router=express.Router();

router.route('/product/all').get(allProduct);
router.route('/product/add').post(addProduct);
router.route('/product/update/:id').put(updateProduct);
router.route('/product/delete/:id').delete(deleteProduct);

export default router;