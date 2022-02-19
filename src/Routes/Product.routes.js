// import express
import express from "express";
// import controllers
import { getProducts, 
    getProductById, 
    saveProduct, 
    updateProduct,
    deleteProduct } from "../Controllers/index.js";
 
    // express routerProduct
  const routerProduct= express.Router();
 
// Route get All Products
routerProduct.get('/', getProducts);
// Route get single Product
routerProduct.get('/:id', getProductById);
// Route CREATE Product
routerProduct.post('/', saveProduct);
// Route UPDATE Product
routerProduct.patch('/:id', updateProduct);
// Route DELETE Product
routerProduct.delete('/:id', deleteProduct);
 
// export routerProduct
export default routerProduct;