import { Invoice } from "../models/invoice";

export class InvoiceManagement {
  private invoices: Invoice[] = [];

  public addInvoice(invoice: Invoice): void {
    this.invoices.push(invoice);
  }

  public showInvoices(): void {
    if (this.invoices.length === 0) {
      console.log("\n No invoices found");
      return;
    }
    this.invoices.forEach((invoice) => {
      console.log(`
    **Invoice**
    ID: ${invoice.id}
    Date: ${invoice.getDate()}
    User: ${invoice.user.getName()}
    Total: ${invoice.total}
    Products: ${invoice.products.map((product) => product.name)}
    \n Thanks for shopping with us!`);
    });
  }
}
