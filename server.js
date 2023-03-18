import envs from "./src/config/envs.js";
import app from "./src/app.js";

const port = envs.port;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
