import express from "express";
import clientesRouter from "./src/routes/clientes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", clientesRouter);

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
