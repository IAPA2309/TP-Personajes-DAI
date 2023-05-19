import config from '../../dbconfig.js';
import sql from 'mssql';

export default class PersonajeService {
    static getAllCharacters = async () => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query("SELECT Imagen, Nombre, Id FROM Personajes");
            returnEntity = result.recordset[0];
        }catch(error){
            console.log(error)
        }
        return returnEntity;
    }

    static getCharacterById = async (id) => {
        let returnEntity = null;
        try {
          let pool = await sql.connect(config);
          let result = await pool
            .request()
            .input("pId", sql.Int, id)
            .query("SELECT * FROM Personajes WHERE id = @pId");
          returnEntity = result.recordsets[0][0];
        } catch (error) {
          console.log(error);
        }
        return returnEntity;
    }

    static createCharacter = async (personaje) => {
      const insertQuery =
      "INSERT INTO Personajes (Imagen, Nombre, Edad, Peso, Historia, Peliculas) VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria, @pPeliculas)";
      try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pImagen", sql.VarChar(150), personaje.imagen)
        .input("pNombre", sql.VarChar(50), personaje.nombre)
        .input("pEdad", sql.Int, personaje.edad)
        .input("pPeso", sql.Float, personaje.peso)
        .input("pHistoria", sql.VarChar(MAX), pizza.historia)
        .input("pPeliculas", sql.VarChar(MAX), pizza.peliculas)
        .query(insertQuery);
      } catch (error) {
        console.log(error);
      }
    }
}