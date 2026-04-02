const initDatabase = require("./src/db/init");
const {
  createProduct,
  listAllProducts
} = require("./src/services/products");

async function run() {
  await initDatabase();

  const p = await createProduct({
    name: "Phone",
    price: 20000,
    category: "Electronics",
    stock: 10
  });

  console.log("Created:", p);

  const all = await listAllProducts();
  console.log("All products:", all);
}

run();