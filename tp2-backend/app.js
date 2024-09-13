import express from "express";
import inventorRouter from "./routes/inventor.js";
import userRouter from "./routes/user.js";

//TODO llevarlo a archivo de config
const PORT = 3000;

const app = express();
app.use(express.json());
app.use("/api/inventors", inventorRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Servidor Web Express en el puerto: ", PORT);
});
