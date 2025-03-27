import { Product } from "./product";
import { User } from "./user";

export class Invoice {
  private static idCounter = 1;
  private id: number = Invoice.idCounter++;
  private date: Date = new Date();

  constructor(
    private user: User,
    private products: Product[],
    private total: number
  ) {}

  // Metodo para obtener el ID de la factura
  public getId(): number {
    return this.id;
  }

  // Metodo para obtener la fecha en formato string
  public getDate(): string {
    return this.date.toDateString();
  }

  // Metodo para mostrar la factura
  public showInvoice(): string {
    return `
        **Invoice**
        ID: ${this.id}
        Date: ${this.getDate()}
        User: ${this.user.getName()}
        Total: ${this.total}
        Products: ${this.products.map((product) => product.getName())}
        \n Thanks for shopping with us!`;
  }
}
