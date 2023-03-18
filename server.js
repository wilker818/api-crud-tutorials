require("dotenv").config();
import app from "./src/app.js";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
