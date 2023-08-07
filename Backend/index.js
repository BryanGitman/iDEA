import express from "express";
import cors from "cors";
import DEAService from "./src/services/dea-services.js";

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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});