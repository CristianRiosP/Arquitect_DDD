import { UserRepository } from '../../domain/repository/userRepository';
import { User } from '../../domain/entities/User';

export class UserRepositoryInfraestructure implements UserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }

  async save(user: User): Promise<void> {
    console.log('Saving user:', user.userData);
    this.users.push(user);
  }
}
