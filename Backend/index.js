import express from "express";
import cors from "cors";
import DEAService from "./src/services/dea-services.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/dea', async (req, res) =>
{
    const dea = await DEAService.getAll();
    res.status(200).send(dea);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})