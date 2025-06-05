import { AuthService } from '../../domain/services/authServices';
import { User } from '../../domain/entities/User';

export class AuthUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute(email: string, password: string): Promise<User | null> {
    return this.authService.validateUser(email, password);
  }
}
