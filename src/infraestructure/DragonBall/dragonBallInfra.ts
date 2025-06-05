import axios from 'axios';


const DRAGON_BALL_API_URL = 'https://dragonball-api.com/api/characters';

export async function obtenerPersonajesDragonBall() {
  try {
    const response = await axios.get(DRAGON_BALL_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los personajes de Dragon Ball:', error);
    throw error;
  }
}