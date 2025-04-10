import { Product } from "./product";
import { User } from "./user";

export class Invoice {
  public static idCounter = 1;
  public id: number = Invoice.idCounter++;
  public date: Date = new Date();

  constructor(
    public user: User,
    public products: Product[],
    public total: number
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
        Products: ${this.products.map((product) => product.name)}
        \n Thanks for shopping with us!`;
  }
}
