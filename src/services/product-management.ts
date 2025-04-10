import { Product } from "../models/product";

export class ProductManagement {
  private products: Product[] = [];

  addProduct(product: Product): void {
    const productExists = this.products.some(
      (producto) => producto.id === product.id
    );
    if (productExists) {
      this.managerMessage(`Product with ID ${product.id} already exists`);
      return;
    }
    this.products.push(product);
    this.managerMessage(`Product with ID ${product.id} added successfully`);
  }

  showProducts(): void {
    // const allProducts = this.products;
    // if (this.products.length === 0) {
    //   console.log("No products to show");
    //   return;
    // }
    // console.log(`\n List of products`);
    // allProducts.forEach((producto) => {
    //   console.log(`ID: ${producto.id} - Name: ${producto.name}`);
    // });

    const productLists: Array<Product> | string =
      this.products.length === 0 ? "No Products to show" : this.products;
    console.log(productLists);

    // this.products.forEach((product) => product.showInfo());
  }

  findProductById(id: number): Product {
    const product = this.products.find((producto) => producto.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }

  removeProductById(id: number): void {
    const productIndex = this.products.findIndex(
      (producto) => producto.id === id
    );
    if (productIndex === -1) {
      this.managerMessage(`Product with ID ${id} not found`);
    }
    this.products.splice(productIndex, 1);
    this.managerMessage(`Product with ID ${id} removed successfully`);
  }

  updateProduct(product: Product): void {
    const productIndex = this.products.findIndex(
      (producto) => producto.id === producto.id
    );
    if (productIndex === -1) {
      this.managerMessage(`Product with ID ${product.id} not found`);
    }
    this.products[productIndex] = product;
    this.managerMessage(`Product with ID ${product.id} updated successfully`);
  }

  private managerMessage(msg: string): void {
    console.log(msg);
  }
}
