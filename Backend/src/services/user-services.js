import {config} from '../../dbconfig.js';
import sql from 'mssql';

class UserService
{
    static getUser = async (nomUser) =>
    {
        let usuario = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().input('pUser', sql.NVarChar, nomUser).query('SELECT * FROM Establecimiento WHERE Nombre = @pUser');
            usuario = result.recordsets[0][0];
        } catch(error){
            console.log(error);
        }
        return usuario;
    }

    static insertUser = async (user) =>
    {
        const {Mail, Contraseña, Nombre, FotoPerfil, CUIT} = user;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pMail',sql.NVarChar,Mail)
            .input('pContra',sql.NVarChar,Contraseña)
            .input('pNombre',sql.NVarChar,Nombre)
            .input('pFoto',sql.NVarChar,FotoPerfil)
            .input('pCUIT',sql.NVarChar,CUIT)
            .query('INSERT INTO Establecimiento (Mail, Contraseña, Nombre, FotoPerfil, CUIT) VALUES (@pMail, @pContra, @pNombre, @pFoto, @pCUIT)');
    }
}

export default UserService;