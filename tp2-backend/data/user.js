import getConnection from "./connection.js";
import bcryptjs from "bcryptjs";

export async function addUser(user) {
  // {
  // username: "Pablo Fernandez"
  // email: "pablo.hinojosa@ort.edu.ar"
  // password: "abc123"
  // }
  user.password = await bcryptjs.hash(user.password, 10);
  const clientMongo = await getConnection();

  const result = clientMongo
    .db("sample_tp2")
    .collection("users")
    .insertOne(user);
  return result;
}

export async function findByCredentials(email, password) {
  const clientMongo = await getConnection();
  const user = clientMongo
    .db("sample_tp2")
    .collection("users")
    .findOne({ email: email });

  if (!user) {
    // para no revelar detalles de usuario
    throw new Error("Credenciales no validas");
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Credenciales no validas");
  }

  return user;
}
