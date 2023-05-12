import express from "express";
import PersonajeService from './src/services/personajes.services.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const personaje = await PersonajeService.getAll();
    console.log("/GET (getAll - Personajes)")
    res.status(200).send(personaje);
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
