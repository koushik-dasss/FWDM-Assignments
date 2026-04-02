// Qs. 4

// In package.json:
// "scripts": {
//   "test": "jest"
// }

const mongoose = require("mongoose");
const {
    createProduct,
    listAllProducts,
    listProductsByCategory,
    updateProduct,
    deleteProduct
} = require("../src/services/products");

beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("Product Service Tests" , () => {
    let productId;
    test("Create Product" , async() => {
        const product = await createProduct({
            name: "Phone",
            price: 1000,
            category: 'Electronics',
            stock: 10
        });
        productId = product._id;
    });
    productId = product._id;
    expect(product._id).toBeDefined(); // id exists
    expect(product.createdAt).toBeDefined(); // timestamp exists
    expect(product.updateAt).toBeDefined();
});