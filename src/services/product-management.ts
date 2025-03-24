import { Product } from "../models/product";

export class ProductManagement {
  private products: Product[] = [];

  // Método para agregar un producto al arreglo de productos
  addProduct(product: Product): void {
    const productExists = this.products.some(
      (p) => p.getId() === product.getId()
    );
    if (productExists) {
      throw new Error(`Product with ID ${product.getId()} already exists`);
    }
    this.products.push(product);
    console.log(`Product with ID ${product.getId()} added successfully`);
  }

  // Método para listar los productos
  showProducts(): void {
    if (this.products.length === 0) {
      console.log("No products to show");
      return;
    }
    console.log("List of products:");
    this.products.forEach((product) => product.showInfo());
  }

  // Método para buscar un producto por ID
  findProductById(id: number): Product {
    const product = this.products.find((p) => p.getId() === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Método para eliminar un producto por ID
  removeProductById(id: number): void {
    const productIndex = this.products.findIndex((p) => p.getId() === id);
    if (productIndex === -1) {
      throw new Error(`Product with ID ${id} not found`);
    }
    this.products.splice(productIndex, 1);
    console.log(`Product with ID ${id} removed successfully`);
  }

  // Método para actualizar un producto
  updateProduct(product: Product): void {
    const productIndex = this.products.findIndex(
      (p) => p.getId() === product.getId()
    );
    if (productIndex === -1) {
      throw new Error(`Product with ID ${product.getId()} not found`);
    }
    this.products[productIndex] = product;
    console.log(`Product with ID ${product.getId()} updated successfully`);
  }
}
