import bcrypt from 'bcryptjs';
import { HashService } from '../../shared/hashService';

export class BcryptHashService implements HashService {
  compare(plain: string, hash: string): boolean {
    return bcrypt.compareSync(plain, hash);
  }

  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 10);
  }
}
