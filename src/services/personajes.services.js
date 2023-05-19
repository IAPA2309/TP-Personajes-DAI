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
        console.log("Estoy en: PersonajeService.getCharacterById(id)");
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
        let returnEntity = null;
        console.log("Estoy en: PersonajeService.createCharacter(personaje)");
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
}