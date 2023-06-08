import express from "express";
import PersonajeService from './src/services/personajes.services.js';
import Personaje from './src/models/personajes.models.js';
import PeliculaService from './src/services/peliculas.services.js';
import Pelicula from './src/models/peliculas.models.js';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json()); // Para poder parsear el body como req.body
app.use(
  express.static(path.join(__dirname, "public"), { type: "text/javascript" })
);

app.get('/a', (req, res) => {
    res.status(200).json( { message: 'A'});
})

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
app.get('/character', async (req, res) => {
    const personaje = await PersonajeService.searchCharacterByQueryName(req.query.nombre);
    console.log("/GET characters/?nombre=query (PersonajeService.searchCharacterByQueryName)")
    res.status(200).send(personaje);
})
app.post('/characters', async (req, res) => {
    console.log(req);
    try{
        const personaje = new Personaje();
        personaje.imagen = req.body.imagen;
        personaje.nombre = req.body.nombre;
        personaje.edad = req.body.edad;
        personaje.peso = req.body.peso;
        personaje.historia = req.body.historia;
        personaje.peliculas = req.body.peliculas;
        await PersonajeService.createCharacter(personaje);
        res.status(200).json({ message: 'Personaje actualizado' })
        res.status(200).json({ message: 'Personaje creado' })
    }catch(error){
        console.log(error);
        res.status(500).json({ error: ' Fallo el insert ' });
    }
})
app.delete('/characters/:id', async (req, res) => {
    console.log('/DELETE characters/:id (PersonajeService.deleteCharacterById)');
    try{
        await PersonajeService.deleteCharacterById(req.params.id)
        res.status(200).json({ message: 'Personaje borrado' });
    }catch(error){
        console.log(error);
        res.status(200).json({ message: 'Fallo el delete' });
    }
})
app.put('/characters/:id', async (req, res) => {
    console.log('/PUT characters/:id (PersonajeService.updateCharacter)');
    try{
        const personaje = new Personaje();
        personaje.id = req.body.id;
        personaje.imagen = req.body.imagen;
        personaje.nombre = req.body.nombre;
        personaje.edad = req.body.edad;
        personaje.peso = req.body.peso;
        personaje.historia = req.body.historia;
        personaje.peliculas = req.body.peliculas;
        await PersonajeService.updateCharacter(personaje);
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Fallo el update' });
    }
})

app.get('/movies', async (req, res) => {
    const peliculas = await PeliculaService.getAllMovies();
    console.log("/GET movies (PeliculaService.getAllMovies)")
    res.status(200).send(peliculas);
})
app.get('/movies/:id', async (req, res) => {
    const pelicula = await PeliculaService.getMovieById(req.params.id);
    console.log("/GET movies/:id (PeliculaService.getMovieById)")
    res.status(200).send(pelicula);
})
app.post('/movies', async (req, res) => {
    console.log(req);
    try{
        const pelicula = new Pelicula();
        pelicula.imagen = req.body.imagen;
        pelicula.titulo = req.body.titulo;
        pelicula.fechaCreacion = req.body.fechaCreacion;
        pelicula.calificacion = req.body.calificacion;
        await PeliculaService.createMovie(pelicula);
        res.status(200).json({ message: 'Pelicula creada' })
    }catch(error){
        console.log(error);
        res.status(500).json({ error: ' Fallo el insert ' });
    }
})
app.delete('/movies/:id', async (req, res) => {
    console.log('/DELETE movies/:id (PeliculaService.deleteMovieById)');
    try{
        await PeliculaService.deleteMoviesById(req.params.id)
        res.status(200).json({ message: 'Pelicula borrada' });
    }catch(error){
        console.log(error);
        res.status(200).json({ message: 'Fallo el delete' });
    }
})
app.put('/movies/:id', async (req, res) => {
    console.log('/PUT movies/:id (PeliculaService.updateMovie)');
    try{
        const pelicula = new Pelicula();
        pelicula.id = req.body.id;
        pelicula.imagen = req.body.imagen;
        pelicula.titulo = req.body.titulo;
        pelicula.fechaCreacion = req.body.fechaCreacion;
        pelicula.calificacion = req.body.calificacion;
        await PeliculaService.updateMovie(pelicula);
        res.status(200).json({ message: 'Pelicula actualizada' })
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Fallo el update' });
    }
}) 

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
