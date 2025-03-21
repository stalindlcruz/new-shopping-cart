import { Product } from "./models/product";

// Creamos algunas instancias de la clase Product
const product1 = new Product(1, "Keyboard", "Standard QWERTY keyboard", 20, 50);
const product2 = new Product(2, "Mouse", "Wireless optical mouse", 10, 100);
const product3 = new Product(3, "Monitor", "27-inch LED monitor", 200, 25);

product1.showInfo();
product2.showInfo();
product3.showInfo();