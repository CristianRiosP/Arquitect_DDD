import { UserRepository } from '../repository/userRepository';
import { HashService } from '../../shared/hashService';
import { User } from '../entities/User';

export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashService: HashService
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;

    const valid = user.verifyPassword(password, this.hashService);
    return valid ? user : null;
  }
}