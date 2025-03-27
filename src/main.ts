import { Product } from "./models/product";
import { ProductManagement } from "./services/product-management";
import { User } from "./models/user";
import { UserManagement } from "./services/user-management";
import { Invoice } from "./models/invoice";

// Creamos algunas instancias de la clase Product
const product1 = new Product(1, "Keyboard", "Standard QWERTY keyboard", 20, 50);
const product2 = new Product(2, "Mouse", "Wireless optical mouse", 10, 100);
const product3 = new Product(3, "Monitor", "27-inch LED monitor", 200, 25);

// Creamos algunas instancias de la clase User
const user1 = new User(1, "Engels", "engels@mail.com", "admin");
const user2 = new User(2, "Stalin", "stalin@mail.com", "user");

// Creamos una instancia de la clase Invoice
const invoice = new Invoice(user1, [product1, product2], 30);

// product1.showInfo();
// product2.showInfo();
// product3.showInfo();

// Creamos una instancia de la clase ProductManagement
const inventory = new ProductManagement();

// Creamos una instancia de la clase UserManagement
const users = new UserManagement();

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

user1.showInfo();
console.log("Nombre del usurio II:", user2.getName());

// Agregando usuarios
users.addUser(user1);
users.addUser(user2);
users.showUsers();

// Buscando user por su ID
console.log(`\n Buscando Usuario por su Id:`);
try {
  const userFinded = users.findUserById(3);
  console.log(`User with ID: ${userFinded.getId()} found.`);
} catch (error) {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log(" An unknown error ocurred");
  }
}

// Eliminando un User by ID
console.log("\n Deleting user by id");
try {
  const deletedUser = users.deleteUserById(2);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.log("An unknown error ocurred");
  }
}

users.showUsers();

// Mostrando la factura
console.log('\n Mostrando la factuira', '\n' + invoice.showInvoice());