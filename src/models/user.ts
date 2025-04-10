enum Role {
  admin,
  user,
}

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: Role
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

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
