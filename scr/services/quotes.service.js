import fs from "fs";
import path from "path";

const favoritesPath = path.join(process.cwd(), "data", "favorites.json");

export const getCitaRandom = async () => {
    try {
        const cita = await fetch('https://zenquotes.io/api/random');
        const citaJson = await cita.json();

          return {
            quote: citaJson[0].q,
            author: citaJson[0].a
        };

    } catch (error) {
        throw new Error('Hubo un problema');
    }

}

export const getFavorito = async () => {
    try { 
        const cita = await fs.readFile(favoritesPath, 'utf-8');
        return JSON.parse(cita);

    } catch (error) {
        throw new Error('Hubo un problema');
    }

}