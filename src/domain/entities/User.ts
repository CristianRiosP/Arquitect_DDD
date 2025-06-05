import { HashService } from '../../shared/hashService';
export interface IUser {
  id: string;
  email: string;
  rol: 'admin' | 'cliente' | 'barbero';
  nombre: string;
  password: string;
}

export class User {
  constructor(private user: IUser) {

  }

  get id(): string {
    return this.user.id;
  }

  get email(): string {
    return this.user.email;
  } 

  get rol(): 'admin' | 'cliente' | 'barbero' {
    return this.user.rol;
  } 

  get nombre(): string {
    return this.user.nombre;
  } 
  
  get password(): string {
    return this.user.password;
  }

  get userData(): IUser {
    return this.user;
  } 


  verifyPassword(plainPassword: string, hashService: HashService): boolean {
    return hashService.compare(plainPassword, this.password);
  }
}