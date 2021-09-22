import "./db.js"
import express from "express"
import routerPacientes from "./routers/pacientes.router.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pacientes", routerPacientes);

app.listen(3001, () => console.log("Server on port 3001"));

