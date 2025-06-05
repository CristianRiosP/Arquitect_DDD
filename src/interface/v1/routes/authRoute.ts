import express, { Request, Response } from 'express';
import {AuthController} from '../../controller/authController';
import {AuthUseCase} from '../../../application/User/authUseCase';
import { UserRepositoryInfraestructure } from '../../../infraestructure/repository/UserRepositoryInfraestructure';
import { BcryptHashService } from '../../../infraestructure/services/bcrypHashService';
import { AuthService } from '../../../domain/services/authServices';
import { User, IUser } from '../../../domain/entities/User';

const router = express.Router();

const userRepo = new UserRepositoryInfraestructure();
const hashService = new BcryptHashService();
const authService = new AuthService(userRepo, hashService);
const authUseCase = new AuthUseCase(authService);
const authController = new AuthController(authUseCase);

(async () => {
  const hashed = await hashService.hash('secret');
  const user: IUser = {
    id: '1',
    email: 'admin@example.com', 
    rol:'admin',
    nombre: 'Cristian',
    password:hashed
  }
  await userRepo.save(new User(user));
})();

router.post('/',(_req: Request, res: Response) => authController.login(_req, res)); 

export default router;