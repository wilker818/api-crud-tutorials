import tutorial from "./tutorial.routes.js";

const routes = (app) => {
  app.use("/tutorials", tutorial);
};

export default routes;
