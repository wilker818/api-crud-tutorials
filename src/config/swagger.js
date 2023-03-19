import envs from "./envs.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const port = envs.port;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CNI Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Wilker Ferreira",
        url: "https://github.com/wilker818",
        email: "wilkerferreira818@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./src/routes/*.routes.js", "./src/models/*.model.js"],
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
