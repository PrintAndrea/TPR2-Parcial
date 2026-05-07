import * as quotesService from "../services/quotes.service.js";

export const getCitaRandom = async (req, res) => {
    try {
        const cita = await quotesService.getCitaRandom();
        res.status(200).json(cita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getFavorito = async (req, res) => {
    try {
        const cita = await quotesService.getFavorito();
        res.status(200).json(cita);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}


