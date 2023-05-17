// UserService.ts
import { User } from './User';

export class UserService {
  private users: User[] = [];

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  createUser(name: string): User {
    const id = this.generateId();
    const user = new User(id, name);
    this.users.push(user);
    return user;
  }
}
