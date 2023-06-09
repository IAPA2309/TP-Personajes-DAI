import config from '../../dbconfig.js';
import sql from 'mssql';
import pkg from "mssql";
const { MAX } = pkg;

export default class PeliculasService {
  static getAllMovies = async () => {
    let returnEntity = null;
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
          .query("SELECT Imagen, Titulo, Id FROM Peliculas");
        returnEntity = result.recordset;
    }catch(error){
        console.log(error)
    }
    return returnEntity;
  }

  static getMovieById = async (id) => {
    let returnEntity = null;
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pId", sql.Int, id)
        .query("SELECT * FROM Peliculas WHERE id = @pId");
      returnEntity = result.recordsets[0][0];
    } catch (error) {
      console.log(error);
    }
    return returnEntity;
  }

  static createMovie = async (pelicula) => {

    if(pelicula.calificacion > 11) pelicula.calificacion = 5;
    if(pelicula.calificacion > 5) pelicula.calificacion /= 2;
    if(pelicula.calificacion < 1) pelicula.calificacion = 1;

    const insertQuery =
    "INSERT INTO Peliculas (Imagen, Titulo, FechaCreacion, Calificacion) VALUES (@pImagen, @pTitulo, @pFechaCreacion, @pCalificacion)";
    try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("pImagen", sql.VarChar(150), pelicula.imagen)
      .input("pTitulo", sql.VarChar(50), pelicula.titulo)
      .input("pFechaCreacion", sql.Date, pelicula.fechaCreacion)
      .input("pCalificacion", sql.Float, pelicula.calificacion)
      .query(insertQuery);
    } catch (error) {
      console.log(error);
    }
  }

  static deleteMoviesById = async (id) => {
    let rowsAffected = 0;
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pId", sql.Int, id)
        .query("DELETE FROM Peliculas WHERE id = @pId");
      rowsAffected = result.rowsAffected;
    } catch (error) {
      console.log(error);
    }
    return rowsAffected;
  }

  static updateMovie = async (pelicula) => {
    const insertQuery =
    "UPDATE Peliculas SET imagen = @pImagen, titulo = @pTitulo, fechaCreacion = @pFechaCreacion, calificacion = @pCalificacion WHERE id = @pId";
    try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("pId", sql.Int, pelicula.id)
      .input("pImagen", sql.VarChar(150), pelicula.imagen)
      .input("pTitulo", sql.VarChar(50), pelicula.titulo)
      .input("pFechaCreacion", sql.Date, pelicula.fechaCreacion)
      .input("pCalificacion", sql.Float, pelicula.calificacion)
      .query(insertQuery);
    } catch (error) {
      console.log(error);
    }
  }

  static searchMovieByQueryName = async (queryParam) => {
    let returnEntity = null;
    queryParam = '%'+ queryParam +'%';
    try{
      let pool = await sql.connect(config);
      let result = await pool
      .request()
      .input("pQueryParam", sql.VarChar(150), queryParam)
      .query("SELECT * FROM Peliculas WHERE titulo LIKE @pQueryParam")
      returnEntity = result.recordset;
    }catch(error){
      console.log(error)
    }
    return returnEntity;
  }

  static searchMovieByOrder = async (queryParam) => {
    let returnEntity = null;
    try{
      let pool = await sql.connect(config);
      let result = await pool
      .request()
      .query("SELECT * FROM Peliculas ORDER BY titulo " + queryParam)
      returnEntity = result.recordset;
    }catch(error){
      console.log(error)
    }
    return returnEntity;
  }
}