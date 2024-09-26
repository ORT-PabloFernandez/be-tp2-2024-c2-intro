import express from "express";
import { addInventor, getInventor, getInventors } from "../data/inventor.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const inventors = await getInventors();
  res.json(inventors);
});

router.get("/:id", async (req, res) => {
  const inventor = await getInventor(req.params.id);
  res.json(inventor);
});

router.post("/", async (req, res) => {
  const inventor = req.body;
  const result = await addInventor(inventor);
  res.json(result);
});

// TODO: llamar a la funcion de la capa de datos
router.put("/:id", (req, res) => {
  res.send("endpoint put inventor:" + JSON.stringify(req.body));
});

// TODO: llamar a la funcion de la capa de datos
router.delete("/:id", (req, res) => {
  res.send("endpoint delete inventor:" + req.params.id);
});

export default router;
