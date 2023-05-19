import express from "express";
import PersonajeService from './src/services/personajes.services.js';

const app = express();
const port = 3000;

app.get('/characters', async (req, res) => {
    const personaje = await PersonajeService.getAllCharacters();
    console.log("/GET characters (PersonajeService.getAllCharacters)")
    res.status(200).send(personaje);
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
