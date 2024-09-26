import express from "express";
import { addUser, findByCredentials, generateAuthToken } from "../data/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const result = await addUser(req.body);
  res.send(result);
});
router.post("/login", async (req, res) => {
  try {
    const user = await findByCredentials(req.body.email, req.body.password);
    const token = generateAuthToken(user);
    res.send({ user, token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

export default router;
