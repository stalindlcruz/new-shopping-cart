import { User } from "../models/user";

export class UserManagement {
  private users: User[] = [];

  public addUser(user: User): void {
    const userExist = this.users.some(
      (usuario) => usuario.getId() === user.getId()
    );
    if (userExist) {
      throw new Error(`User with ID: ${user.getId()} already exist`);
    }
    this.users.push(user);
    console.log(`\nProduct with ID: ${user.getId()} added successfully`);
  }

  public showUsers(): void {
    if (this.users.length === 0) {
      console.log("No hay users registrados");
      return;
    }
    console.log("\n Lista de usuarios:");
    this.users.forEach((usuario) => {
      usuario.showInfo();
    });
  }

  public findUserById(id: number): User {
    const user = this.users.find((usuario) => usuario.getId() === id);
    if (!user) {
      throw new Error(`User with ID: ${id} not found`);
    }
    return user;
  }

  public deleteUserById(id: number): void {
    const userIndex = this.users.findIndex((usuario) => usuario.getId() === id);
    if (userIndex === -1) {
      throw new Error(`User with ID: ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    console.log(`User with ID: ${id} removed successfully`);
  }
}
