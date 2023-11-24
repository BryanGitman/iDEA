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
                    SELECT DEA.Id, DEA.Descripcion, ubi.Calle, ubi.Altura, est.Nombre, ubi.Latitud, ubi.Longitud
                    FROM DEA
                    inner join Ubicacion ubi on DEA.IdUbicacion = ubi.Id
                    inner join Establecimiento est on ubi.IdEstablecimiento = est.Id
                    WHERE DEA.Id NOT IN((SELECT IdDEA from Problema))
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
                    WHERE DEA.Id NOT IN((SELECT IdDEA from Problema))
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
                    SELECT DEA.Id, Ubicacion.Calle, Ubicacion.Altura, Ubicacion.Ciudad, Ubicacion.Pais, Ubicacion.CodigoPostal, Ubicacion.Latitud, Ubicacion.Longitud, DEA.Descripcion, DEA.Telefono, DEA.Accesibilidad, DEA.Disponibilidad, Establecimiento.Nombre, (Select Nombre From Foto where IdDEA = @pId ) as Fotos, STUFF((Select Contenido from Comentario where IdDEA = @pId FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'),1,0,'') as Comentarios  
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

    static getByEst = async (idEst) =>
    {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId',sql.Int,idEst)
                .query(`
                    SELECT DEA.Id, DEA.Descripcion, Ubicacion.Calle, Ubicacion.Altura
                    FROM DEA
                    inner join Ubicacion ON DEA.IdUbicacion = Ubicacion.Id
                    WHERE Ubicacion.IdEstablecimiento = @pId
                `);
            returnList = result.recordsets[0];
        } catch(error){
            console.log(error);
        }
        return returnList;
    }

    static insertUbi = async (ubicacion) =>
    {
        const {Calle, Altura, Ciudad, Pais, CodigoPostal, Latitud, Longitud, IdEstablecimiento} = ubicacion;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pCalle',sql.NVarChar,Calle)
            .input('pAltura',sql.Int,Altura)
            .input('pCiudad',sql.NVarChar,Ciudad)
            .input('pPais',sql.NVarChar,Pais)
            .input('pCodigoPostal',sql.NVarChar,CodigoPostal)
            .input('pLatitud',sql.Float,Latitud)
            .input('pLongitud',sql.Float,Longitud)
            .input('pIdEstablecimiento',sql.Int,IdEstablecimiento)
            .query(`
                IF NOT EXISTS (SELECT * FROM Ubicacion WHERE Ubicacion.Calle = @pCalle AND Ubicacion.Altura = @pAltura AND Ubicacion.Ciudad = @pCiudad AND Ubicacion.Pais = @pPais AND Ubicacion.CodigoPostal = @pCodigoPostal AND Ubicacion.Latitud = @pLatitud AND Ubicacion.Longitud = @pLongitud AND Ubicacion.IdEstablecimiento = @pIdEstablecimiento)
                BEGIN
                INSERT INTO Ubicacion (Ubicacion.Calle, Ubicacion.Altura, Ubicacion.Ciudad, Ubicacion.Pais, Ubicacion.CodigoPostal, Ubicacion.Latitud, Ubicacion.Longitud, Ubicacion.IdEstablecimiento)
                VALUES(@pCalle, @pAltura, @pCiudad, @pPais, @pCodigoPostal, @pLatitud, @pLongitud, @pIdEstablecimiento)
                END
            `);
    }

    static insertDEA = async (dea, ubicacion) =>
    {
        const {Descripcion, Telefono, Accesibilidad, Disponibilidad} = dea;
        const {Calle, Altura, Ciudad, Pais, CodigoPostal, Latitud, Longitud, IdEstablecimiento} = ubicacion;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pDescripcion',sql.NVarChar,Descripcion)
            .input('pTelefono',sql.NVarChar,Telefono)
            .input('pAccesibilidad',sql.Int,Accesibilidad)
            .input('pDisponibilidad',sql.NVarChar,Disponibilidad)
            .input('pCalle',sql.NVarChar,Calle)
            .input('pAltura',sql.Int,Altura)
            .input('pCiudad',sql.NVarChar,Ciudad)
            .input('pPais',sql.NVarChar,Pais)
            .input('pCodigoPostal',sql.NVarChar,CodigoPostal)
            .input('pLatitud',sql.Float,Latitud)
            .input('pLongitud',sql.Float,Longitud)
            .input('pIdEstablecimiento',sql.Int,IdEstablecimiento)
            .query(`
                IF NOT EXISTS (SELECT * FROM DEA WHERE DEA.Descripcion = @pDescripcion)
                BEGIN
                INSERT INTO DEA (DEA.Descripcion, DEA.Telefono, DEA.Accesibilidad, DEA.IdUbicacion, DEA.Disponibilidad)
                VALUES(@pDescripcion, @pTelefono, @pAccesibilidad, (SELECT Ubicacion.Id FROM Ubicacion WHERE Ubicacion.Calle = @pCalle AND Ubicacion.Altura = @pAltura AND Ubicacion.Ciudad = @pCiudad AND Ubicacion.Pais = @pPais AND Ubicacion.CodigoPostal = @pCodigoPostal AND Ubicacion.Latitud = @pLatitud AND Ubicacion.Longitud = @pLongitud AND Ubicacion.IdEstablecimiento = @pIdEstablecimiento), @pDisponibilidad)
                END 
            `);
    }

    static insertFoto = async (idDEA) =>
    {
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request.input('pId',sql.Int,idDEA).input('pFoto',sql.NVarChar,foto).query("INSERT INTO Foto (Nombre, IdDEA) VALUES (CONCAT('dea',@pId,'.jpg'), @pId)");
    }

    static update = async (dea) =>
    {
        const {Id, Descripcion, Telefono, Accesibilidad, Disponibilidad} = dea;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pId',sql.Int,Id)
            .input('pDescripcion',sql.NVarChar,Descripcion)
            .input('pTelefono',sql.NVarChar,Telefono)
            .input('pAccesibilidad',sql.Int,Accesibilidad)
            .input('pDisponibilidad',sql.NVarChar,Disponibilidad)
            .query('UPDATE DEA SET Descripcion = @pDescripcion, Telefono = @pTelefono, Accesibilidad = @pAccesibilidad, Disponibilidad = @pDisponibilidad WHERE Id = @pId');
    }

    static deleteById = async (id) =>
    {
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request.input('pId',sql.Int,id).query('DELETE FROM DEA WHERE DEA.Id = @pId');
    }

    static deleteUbi = async () =>
    {
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request.query('DELETE FROM Ubicacion WHERE Ubicacion.Id not in (Select distinct DEA.IdUbicacion from DEA)');
    }
}

export default DEAService;