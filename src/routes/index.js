import express from "express";
import tutorial from "./tutorial.routes.js";

const routes = (app) => {
  app.use(express.json(), tutorial);
};

export default routes;
