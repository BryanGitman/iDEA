import {config} from '../../dbconfig.js';
import sql from 'mssql';

class DEAService
{
    static getAll = async () =>
    {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query('SELECT DEA.Id, DEA.Descripcion, ubi.Calle, ubi.Altura, ubi.Latitud, ubi.Longitud, est.Nombre FROM DEA inner join Ubicacion ubi on DEA.IdUbicacion = ubi.Id inner join Establecimiento est on ubi.IdEstablecimiento = est.Id');
            returnList = result.recordsets[0];
        } catch(error){
            console.log(error);
        }
        return returnList;
    }

    static getById = async (id) =>
    {

    }

    static insert = async (dea) =>
    {

    }

    static update = async (dea) =>
    {
        
    }

    static deleteById = async (id) =>
    {

    }
}

export default DEAService;