import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRoute from './v1/routes/usersRoute';
import authRoute from './v1/routes/authRoute';  

dotenv.config();
const DirRutas= process.env.RUTAS || "/api/v1/";


const app: Application = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.json());

// Rutas
 app.use(`${DirRutas}usuario`,userRoute);
 app.use(`${DirRutas}login`,authRoute);


export const startServer = async (): Promise<void> => {
  try {

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Error en la conexión a la base de datos:', error);
  }
};
