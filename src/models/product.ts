export class Product {
  constructor(
    private id: number,
    private name: string,
    private description: string,
    private price: number,
    private stock: number
  ) {}

  // Método para mostrar información del producto
  showInfo(): void {
    console.log(
      `Product:
      ID: ${this.id} -
      Name: ${this.name} -
      Description: ${this.description} -
      Price: $${this.price} -
      Stock: ${this.stock}`
    );
  }
}
