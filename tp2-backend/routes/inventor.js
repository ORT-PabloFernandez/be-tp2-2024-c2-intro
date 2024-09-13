import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("endpoint get inventors");
});

router.get("/:id", (req, res) => {
  res.send("endpoint get inventor:" + req.params.id);
});

router.post("/", (req, res) => {
  res.send("endpoint post inventor:" + JSON.stringify(req.body));
});

router.put("/:id", (req, res) => {
  res.send("endpoint put inventor:" + JSON.stringify(req.body));
});

router.delete("/:id", (req, res) => {
  res.send("endpoint delete inventor:" + req.params.id);
});

export default router;
