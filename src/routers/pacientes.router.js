import express, { Router } from "express"
import * as pacientesController from "../controller/pacientes.controller.js"

const router = new express.Router();

router.get("/:pacienteId", pacientesController.getPacientesById);
router.get("/", pacientesController.getPacientes);
router.post("/", pacientesController.crearPaciente);
router.delete("/:pacienteId", pacientesController.deletePaciente);
router.patch("/:pacienteId", pacientesController.updatePaciente);


export default router