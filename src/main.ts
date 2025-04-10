import { Product } from "./models/product";
import { ProductManagement } from "./services/product-management";
import { User } from "./models/user";
import { UserManagement } from "./services/user-management";
import { Invoice } from "./models/invoice";
import { InvoiceManagement } from "./services/invoice-management";
import { ShoppingCart } from "./services/shopping-cart";

const product1 = new Product(1, "Keyboard", "Standard QWERTY keyboard", 20, 50);
const product2 = new Product(2, "Mouse", "Wireless optical mouse", 10, 100);
const product3 = new Product(3, "Monitor", "27-inch LED monitor", 200, 25);

const user1 = new User(1, "Engels", "engels@mail.com", 0);
const user2 = new User(2, "Stalin", "stalin@mail.com", 1);

const invoice = new Invoice(user1, [product1, product2], 30);
const invoice2 = new Invoice(user2, [product3], 200);

const invoiceManagement = new InvoiceManagement();

// product1.showInfo();
// product2.showInfo();
// product3.showInfo();

const inventory = new ProductManagement();

const users = new UserManagement();

const shoppingCart = new ShoppingCart(user1);

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

inventory.showProducts();

try {
  const product = inventory.findProductById(2);
  console.log(`Product found: ${product.name}`);
} catch (error) {
  console.log("Product not found");
}

try {
  inventory.removeProductById(2);
  inventory.showProducts();
} catch (error) {
  console.log("Product not found");
}

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

users.addUser(user1);
users.addUser(user2);
users.showUsers();

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

// console.log("\n Mostrando la factuira", "\n" + invoice.showInvoice());

invoiceManagement.addInvoice(invoice);
invoiceManagement.addInvoice(invoice2);
invoiceManagement.showInvoices();

shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

shoppingCart.removeProductById(1);
// shoppingCart.removeProductById(2);

shoppingCart.showProducts();

console.log(`Total: $${shoppingCart.getTotal()}`);

shoppingCart.showProducts();

// shoppingCart.pay();

// inventory.showProducts();

// shoppingCart.showProducts();

shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);
shoppingCart.showProducts();

inventory.updateProduct(product2);

invoiceManagement.showInvoices()