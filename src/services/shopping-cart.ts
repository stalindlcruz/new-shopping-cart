import { Product } from "../models/product";
import { Invoice } from "../models/invoice";
import { User } from "../models/user";

export class ShoppingCart {
  private items: Product[] = [];
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  // Método para agregar un producto al carrito de compras
  public addProduct(product: Product): void {
    this.items.push(product);
    console.log(`Product ${product.getName()} added to the shopping cart`);
  }

  // Metodo para eliminar un producto del carrito de compras
  public removeProductById(id: number): void {
    const index = this.items.findIndex((item) => item.getId() === id);
    if (index < 0) {
      throw new Error("Product not found");
    }
    this.items.splice(index, 1);
    console.log(`Product with ID ${id} removed from the
    shopping cart`);
  }

  // Metodo para listar los productos del carrito de compras
  public showProducts(): void {
    if (this.items.length === 0) {
      console.log("The shopping cart is empty");
      return;
    }
    console.log("The shopping cart contains the following products:");
    this.items.forEach((item) => {
      item.showInfo();
    });
  }

  // Metodo para obtener el total de los productos en el carrito de compras
  public getTotal(): number {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }

  // Metodo para pagar y generar la factura
  public pay(): void {
    if (this.items.length === 0) {
      console.log("The shopping cart is empty");
      return;
    }
    const total = this.getTotal();
    console.log(`Total: $${total}`);
    console.log("Payment completed successfully");

    // Crear factura
    const invoice = new Invoice(this.user, this.items, total);
    console.log("Invoice generated successfully");
    console.log(invoice.showInvoice());

    // Limpiar carrito de compras
    this.clear();
  }

  // Metodo para vaciar el carrito de compras
  public clear(): void {
    if (this.items.length === 0) {
      console.log("The shopping cart is already empty");
      return;
    }
    this.items = [];
    console.log("The shopping cart has been cleared");
  }
}
