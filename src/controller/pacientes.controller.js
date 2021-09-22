import * as pacientesService from "../services/pacientes.service.js"

export async function crearPaciente (req, res){
  const {body} = req
  try {
    await pacientesService.crearPaciente(body)
    res.status(200).send("Paciente Creado Satisfactoriamente")
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export async function getPacientes (req, res){
  try {
    const pacientes = await pacientesService.getPacientes()
    res.status(200).json ({pacientes})
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export async function getPacientesById (req, res){
  const {pacienteId} = req.params
  try {
    const paciente = await pacientesService.getPacientesById(pacienteId)
    res.status(200).json (paciente[0])
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deletePaciente(req,res){
  const {pacienteId}=req.params
  try {
    await pacientesService.deletePaciente(pacienteId)
    res.status(200).send("Paciente eliminado satisfactoriamente")
  } catch (error) {
    res.status(400).send(error.message); 
  }
}

export async function updatePaciente (req, res){
  const {pacienteId}=req.params
  const {body}=req
  try {
    await pacientesService.updatePaciente(pacienteId, body)
    res.status(200).send("Paciente actualizado satisfactoriamente");
  } catch (error) {
    res.status(400).send(error.message); 
  }
}