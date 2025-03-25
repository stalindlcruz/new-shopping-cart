export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: "admin" | "user"
  ) {}

  // Metodo para obtener el ID del usuario
  getId(): number {
    return this.id;
  }

  // Metodo para obtener el name de un usuario
  getName(): string {
    return this.name;
  }

  // Metodo para mostrar la info de un usuario
  showInfo(): void {
    console.log(
      `\nUser:
        ID: ${this.id},
        Name: ${this.name},
        Email: ${this.email},
        Role: ${this.role}`
    );
  }
}
