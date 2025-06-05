import {startServer} from './interface/config';


// Iniciar el servidor
startServer()
  .then(() => {
    console.log('Servidor iniciado correctamente');
  })
  .catch((error) => {
    console.error('Error al iniciar el servidor:', error);
  });