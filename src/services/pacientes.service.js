import {db} from "../db.js"

export async function crearPaciente (data){
  try {
    await db("pacientes").insert(data)
    return
  } catch (error) {
    throw new Error (error)
  }
}

export async function getPacientes (){
  try {
    return await db("pacientes").select()
  } catch (error) {
    throw new Error(error);
  }
  
}

export async function getPacientesById (pacienteId){
  try {
    return await db("pacientes").select().where("id_paciente", pacienteId)
  } catch (error) {
    throw new Error(error);
  }
}

export async function deletePaciente (pacienteId){
  try {
    return await db("pacientes").delete().where("id_paciente", pacienteId)
  } catch (error) {
    throw new Error(error); 
  }
}

export async function updatePaciente (pacienteId, data){
  try {
    return await db("pacientes").update(data).where("id_paciente", pacienteId)
  } catch (error) {
    throw new Error(error);
  }
}
