import { Router } from "express";
import * as quotesController from "../controllers/quotes.controller.js";

const router = Router();

router.get("/random", quotesController.getCitaRandom);
router.get("/favorites", quotesController.getFavorito);



export default router;

