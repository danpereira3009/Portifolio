import express from "express";
import formController from "../controllers/formController.js";

const router = express.Router()

router
    .post("/mensagem", formController.cadastrarMensagem)
    .delete("/mensagem/:id", formController.deletarMensagem)

export default router;