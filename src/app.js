import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";
import swagger from "./config/swagger.js";

db.on("err", console.log.bind(console, "Erro de connexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com SUCESSO!!");
});

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

swagger(app);

export default app;
