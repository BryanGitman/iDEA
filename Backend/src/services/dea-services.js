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

    static getAll = async () =>
    {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query(`
                    SELECT DEA.Id, DEA.Descripcion, ubi.Calle, ubi.Altura, est.Nombre, ubi.Latitud, ubi.Longitud
                    FROM DEA
                    inner join Ubicacion ubi on DEA.IdUbicacion = ubi.Id
                    inner join Establecimiento est on ubi.IdEstablecimiento = est.Id
                    inner join Disponibilidad disp on disp.IdDea = DEA.Id
                    WHERE HorarioApertura < (select convert(varchar(10), GETDATE(), 108)) AND HorarioCierre > (select convert(varchar(10), GETDATE(), 108)) AND Dia = (SELECT DATEPART(dw, (SELECT CONVERT (date, SYSDATETIME())))) AND DEA.Id NOT IN((SELECT IdDEA from Problema))
                `);
            returnList = result.recordsets[0];
        } catch(error){
            console.log(error);
        }
        return returnList;
    }

    static getById = async (id) =>
    {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId',sql.Int,id)
                .query(`
                    SELECT DEA.Id, Ubicacion.Calle, Ubicacion.Altura, Ubicacion.Ciudad, Ubicacion.Pais, Ubicacion.CodigoPostal, DEA.Descripcion, DEA.Telefono, DEA.Accesibilidad, Establecimiento.Nombre, (Select Nombre From Foto where IdDEA = @pId ) as Fotos, STUFF((Select Contenido from Comentario where IdDEA = @pId FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'),1,0,'') as Comentarios  
                    from DEA
                    inner join Ubicacion on Ubicacion.Id = DEA.IdUbicacion
                    inner join Establecimiento on Establecimiento.Id = Ubicacion.IdEstablecimiento
                    where DEA.Id = @pId
                `);
            returnEntity = result.recordsets[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;
    }

    static getDispoById = async (id) =>
    {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId',sql.Int,id)
                .query(`
                    Select Dia = CASE Dia When '1' Then 'Lunes' When '2' Then 'Martes' When '3' Then 'Miércoles' When '4' Then 'Jueves' When '5' Then 'Viernes' When '6' Then 'Sábado' When '7' Then 'Domingo' END, HorarioApertura, HorarioCierre
                    from Disponibilidad
                    where IdDEA = @pId
                `);
            returnList = result.recordsets[0];
        } catch(error){
            console.log(error);
        }
        return returnList;
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