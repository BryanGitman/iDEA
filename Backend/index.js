import express from "express";
import cors from "cors";
import DEAService from "./src/services/dea-services.js";
import UserService from "./src/services/user-services.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/firstdea', async (req, res) =>
{
    const dea = await DEAService.getMasCerc(req.body);
    res.status(200).send(dea);
});

app.get('/dea', async (req, res) =>
{
    const dea = await DEAService.getAll();
    res.status(200).send(dea);
});

app.get('/dea/:id', async (req, res) =>
{
    const dea = await DEAService.getById(req.params.id);
    res.status(200).send(dea);
});

app.get('/dea/disponibilidad/:id', async (req, res) =>
{
    const disponibilidad = await DEAService.getDispoById(req.params.id);
    res.status(200).send(disponibilidad);
});

app.post('/user', async (req, res) =>
{
    const usuario = await UserService.getUser(req.body.Nombre);
    res.status(200).send(usuario);
});

app.post('/login', async (req, res) =>
{
    const usuario = await UserService.getUser(req.body.Nombre);
    if(!usuario)
    {
        res.status(200).json({message: 'El usuario no existe'});
    }
    else
    {
        if(req.body.Contraseña != usuario.Contraseña)
        {
            res.status(200).json({message: 'Contraseña incorrecta'});
        }
        else
        {
            res.status(200).json({message: 'Sesion iniciada correctamente'});
        }
    }
});

app.post('/register', async (req, res) =>
{
    const usuario = await UserService.getUser(req.body.Nombre);
    if(!usuario)
    {
        try {
            await UserService.insertUser(req.body);
            res.status(200).json({message: 'Usuario creado'});
        } catch(error){
            console.log(error);
            res.status(500).json({message: 'Falló el insert'});
        }
    }
    else
    {
        res.status(200).json({message: 'El usuario ya existe'});
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});