export class Product {
  constructor(
    private id: number,
    private name: string,
    private description: string,
    private price: number,
    private stock: number
  ) {}

  // Método para obtener el ID del producto
  getId(): number {
    return this.id;
  }

  // Método para obtener el nombre del producto
  getName(): string {
    return this.name;
  }

  // Método para obtener el precio del producto
  getPrice(): number {
    return this.price;
  }

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
