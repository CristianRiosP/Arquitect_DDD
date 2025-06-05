import express, { Request, Response } from 'express';
import { AuthUseCase } from '../../application/User/authUseCase';
import { JwtService } from '../../infraestructure/services/jwtService'; 



const jwtService= new JwtService(process.env.JWT_SECRET || 'default_secret', '1h');
export class AuthController {
    constructor(private readonly authUseCase: AuthUseCase) {}

    async login(req: Request, res: Response): Promise<void> {
        console.log('Login request received:', req.body);

        const { email, password } = req.body;

        const user = await this.authUseCase.execute(email, password);
        if (user) {
            const tokenjwt= jwtService.sign({id: user.id, email: user.email, rol: user.rol, nombre: user.nombre});
            res.status(200).json({
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.nombre,
                    role: user.rol,
                },
                // Aquí deberías generar un token JWT real
                token: tokenjwt,
            });
        } else {
            res.status(401).json({
                message: 'Invalid credentials',
            });
        }
    }
}
