import jwt, { SignOptions, Secret } from 'jsonwebtoken';

export class JwtService {
  private readonly secret: Secret;
  private readonly expiresIn: SignOptions['expiresIn']; // <--- cambio aquí

  constructor(secret: string, expiresIn: SignOptions['expiresIn'] = '1h') {
    this.secret = secret;
    this.expiresIn = expiresIn;
  }

  sign(payload: Record<string, any>): string {
    const options: SignOptions = { expiresIn: this.expiresIn };
    return jwt.sign(payload, this.secret, options);
  }

  verify(token: string): any | null {
    try {
      return jwt.verify(token, this.secret);
    } catch {
      return null;
    }
  }
}
