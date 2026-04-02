// Qs. 3
const Product = require("../models/Product");
// CREATE 
async function createProduct({name , price , category , stock }){
    return await Product.create({name , price , category , stock });
}
// READ ALL
async function listAllProducts(){
    return await Product.find();
}
// FILTER
async function listProductsByCategory(category){
    return await Product.find({ category });
}
// UPDATE
async function updateProduct(productId , productData){
    return await Product.findByIdAndUpdate(productId, productData , { new : true });
}
// DELETE
async function deleteProduct(productId){
    return await Product.findByIdAndDelete(productId);
}
module.exports = {
    createProduct,
    listAllProducts,
    listProductsByCategory,
    updateProduct,
    deleteProduct
};