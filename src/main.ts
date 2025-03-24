import { Product } from "./models/product";
import { ProductManagement } from "./services/product-management";

// Creamos algunas instancias de la clase Product
const product1 = new Product(1, "Keyboard", "Standard QWERTY keyboard", 20, 50);
const product2 = new Product(2, "Mouse", "Wireless optical mouse", 10, 100);
const product3 = new Product(3, "Monitor", "27-inch LED monitor", 200, 25);

// product1.showInfo();
// product2.showInfo();
// product3.showInfo();

// Creamos una instancia de la clase ProductManagement
const inventory = new ProductManagement();

// Agregamos los productos al inventario
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Mostramos los productos en el inventario
inventory.showProducts();

// Buscamos un producto por ID
try {
  const product = inventory.findProductById(2);
  console.log(`Product found: ${product.getName()}`);
} catch (error) {
  console.log("Product not found");
}

// Eliminamos un producto por ID
try {
  inventory.removeProductById(2);
  inventory.showProducts();
} catch (error) {
  console.log("Product not found");
}

// Actualizamos un producto
const updatedProduct = new Product(
  1,
  "Mechanical Keyboard",
  "Mechanical keyboard with RGB lighting",
  50,
  10
);
inventory.updateProduct(updatedProduct);
inventory.showProducts();
