import { User } from "../models/user";

export class UserManagement {
  private users: User[] = [];

  // Metodo para agregar user al arreglo de users
  public addUser(user: User): void {
    const userExist = this.users.some((u) => u.getId() === user.getId());
    if (userExist) {
      throw new Error(`User with ID: ${user.getId()} already exist`);
    }
    this.users.push(user);
    console.log(`\nProduct with ID: ${user.getId()} added successfully`);
  }

  // Metodo para listar los users
  public showUsers(): void {
    if (this.users.length === 0) {
      console.log("No hay users registrados");
      return;
    }
    console.log("\n Lista de usuarios:");
    this.users.forEach((u) => {
      u.showInfo();
    });
  }

  // Metodo para buscar un usuario por su ID
  public findUserById(id: number): User {
    const user = this.users.find((u) => u.getId() === id);
    if (!user) {
      throw new Error(`User with ID: ${id} not found`);
    }
    return user;
  }

  // Metodo para elminar un User por el ID
  public deleteUserById(id: number): void {
    const userIndex = this.users.findIndex((u) => u.getId() === id);
    if (userIndex === -1) {
      throw new Error(`User with ID: ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    console.log(`User with ID: ${id} removed successfully`);
  }
}
