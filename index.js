import express from "express";
import PersonajeService from './src/services/personajes.services.js';
import Personaje from './src/models/personajes.models.js'

const app = express();
const port = 3000;

app.get('/characters', async (req, res) => {
    const personaje = await PersonajeService.getAllCharacters();
    console.log("/GET characters (PersonajeService.getAllCharacters)")
    res.status(200).send(personaje);
})
app.get('/characters/:id', async (req, res) => {
    const personaje = await PersonajeService.getCharacterById(req.params.id);
    console.log("/GET characters/:id (PersonajeService.getCharacterById)")
    res.status(200).send(personaje);
})
app.post('/characters', async (req, res) => {
    try{
        const personaje = new Personaje();
        console.log(req.body);
        personaje.imagen = req.body.imagen;
        personaje.nombre = req.body.nombre;
        personaje.edad = req.body.edad;
        personaje.peso = req.body.peso;
        personaje.historia = req.body.historia;
        personaje.peliculas = req.body.peso;
        await PersonajeService.createCharacter(personaje);
        res.status(200).json({ message: 'Personaje creado' })
    }catch(error){
        console.log(error);
        res.status(500).json({ error: ' Fallo el insert ' });
    }
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
