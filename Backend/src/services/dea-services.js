import {config} from '../../dbconfig.js';
import sql from 'mssql';

class DEAService
{
    static getMasCerc = async (UserLocation) =>
    {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pLat',sql.Float,UserLocation.latitude)
                .input('pLong',sql.Float,UserLocation.longitude)
                .query(`
                    SELECT DEA.Id, DEA.Descripcion, ubi.Calle, ubi.Altura, est.Nombre
                    FROM DEA
                    inner join Ubicacion ubi on DEA.IdUbicacion = ubi.Id
                    inner join Establecimiento est on ubi.IdEstablecimiento = est.Id
                    inner join Disponibilidad disp on disp.IdDea = DEA.Id
                    WHERE HorarioApertura < (select convert(varchar(10), GETDATE(), 108)) AND HorarioCierre > (select convert(varchar(10), GETDATE(), 108)) AND Dia = (SELECT DATEPART(dw, (SELECT CONVERT (date, SYSDATETIME())))) AND DEA.Id NOT IN((SELECT IdDEA from Problema))
                    ORDER BY cast(sqrt(power(ubi.Latitud - (@pLat),2) + power(ubi.Longitud - (@pLong),2)) as decimal (38,0))
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