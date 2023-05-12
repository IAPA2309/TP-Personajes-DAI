import config from '../../dbconfig.js';
import sql from 'mssql';

export default class PersonajeSerivce {
    static getAll = async () => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query("SELECT Imagen, Nombre, Id FROM Personaje");
            returnEntity = result.recordset[0];
        }catch(error){
            console.log(error)
        }
        return returnEntity;
    }
}