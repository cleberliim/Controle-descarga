import express from "express";
import {
  getClientes,
  addClientes,
  deleteClientes,
  updateUser,
} from "../controllers/Controller.clientes.js";

const router = express.Router();

router.get("/", getClientes);

router.post("/", addClientes);

router.put("/:id", updateUser);

router.delete("/:id", deleteClientes);

export default router;
