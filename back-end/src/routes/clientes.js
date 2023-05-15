import express from "express";
import {
  getClientes,
  addClientes,
  deleteClientes,
} from "../controllers/Controller.clientes.js";

const router = express.Router();

router.get("/", getClientes);

router.post("/", addClientes);

router.delete("/:id", deleteClientes);

export default router;
