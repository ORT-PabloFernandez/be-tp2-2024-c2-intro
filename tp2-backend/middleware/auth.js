import jwt from "jsonwebtoken";

export async function auth(req, res, next) {
  try {
    const token = req.header("Token");
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
}
