import config from '../../dbconfig.js';
import sql from 'mssql';

class DEAService
{
    static getAll = async () =>
    {
        let returnList = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query('SELECT * FROM DEA');
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