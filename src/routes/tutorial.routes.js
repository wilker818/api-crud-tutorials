import express from "express";
import tutorials from "../controllers/tutorial.controller.js";

const router = express.Router();

router
  // Create a new Tutorial
  .post("/", tutorials.create)
  
  // Retrieve all Tutorials
  .get("/", tutorials.findAll)

  // Retrieve all published Tutorials
  .get("/published", tutorials.findAllPublished)

  // Retrieve a single Tutorial with id
  .get("/:id", tutorials.findOne)

  // Update a Tutorial with id
  .put("/:id", tutorials.update)

  // Delete a Tutorial with id
  .delete("/:id", tutorials.delete)

  // Delete all Tutorials
  .delete("/", tutorials.deleteAll);

export default router;
