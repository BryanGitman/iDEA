import {config} from '../../dbconfig.js';
import sql from 'mssql';

class DEAService
{
    static getMasCerc = async (UserLocation) =>
    {
        if (!UserLocation?.coords) {
            UserLocation.coords = {
                latitude:-34.6037280558531,
                longitude:-58.381572347332224
            };
        }

        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('orig_lat',sql.Float,UserLocation.coords.latitude)
                .input('orig_lng',sql.Float,UserLocation.coords.longitude)
                .query(`
                    SELECT DEA.Id, DEA.Descripcion, ubi.Calle, ubi.Altura, est.Nombre
                    FROM DEA
                    inner join Ubicacion ubi on DEA.IdUbicacion = ubi.Id
                    inner join Establecimiento est on ubi.IdEstablecimiento = est.Id
                    inner join Disponibilidad disp on disp.IdDea = DEA.Id
                    WHERE HorarioApertura < (select convert(varchar(10), GETDATE(), 108)) AND HorarioCierre > (select convert(varchar(10), GETDATE(), 108)) AND Dia = (SELECT DATEPART(dw, (SELECT CONVERT (date, SYSDATETIME())))) AND DEA.Id NOT IN((SELECT IdDEA from Problema))
                    ORDER BY geography::Point(@orig_lat, @orig_lng, 4326).STDistance(geography::Point(ubi.Latitud, ubi.Longitud, 4326))
                `);
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