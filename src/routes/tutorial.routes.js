import express from "express";
import tutorials from "../controllers/tutorial.controller.js";


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tutorials
 *   description: The tutorials managing API
 */

/**
 * @swagger
 * /tutorials:
 *   post:
 *     summary: Create a new tutorial
 *     tags: [Tutorials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              properties:
 *                title:
 *                  type: string
 *                  description: The title of your tutorial
 *                  example: Tutorial on how to create an API
 *                description:
 *                  type: string
 *                  description: The tutorial description
 *                  example: In this tutorial I will teach you how to create an API with Node.js Express and Swagger
 *                published:
 *                  type: boolean
 *                  description: Whether you have published the tutorial
 *                  example: false
 *     responses:
 *       201:
 *         description: The created tutorial.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       400:
 *         description: Content can not be empty!
 *       500:
 *         description: Some error occurred while creating the Tutorial.
 *
 */

router.post("/", tutorials.create);

/**
 * @swagger
 * /tutorials:
 *   get:
 *     summary: Find all tutorials
 *     tags: [Tutorials]
 *     parameters:
 *       - name: title
 *         description: Tutorial title
 *         in: query
 *         type: string
 *     responses:
 *       200:
 *         description: The created tutorial.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       500:
 *         description: Some error occurred while retrieving tutorials.
 *
 */
router.get("/", tutorials.findAll);

/**
 * @swagger
 * /tutorials/published:
 *   get:
 *     summary: Find all published tutorials
 *     tags: [Tutorials]
 *     responses:
 *       200:
 *         description: Tutorial title.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       500:
 *         description: Some error occurred while retrieving tutorials.
 */
router.get("/published", tutorials.findAllPublished);

/**
 * @swagger
 * /tutorials/{id}:
 *   get:
 *     summary: Find tutorials by ID 
 *     tags: [Tutorials]
 *     parameters:
 *       - name: id
 *         description: Tutorial title .
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: List tutorials.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       400:
 *         description: Content can not be empty!
 *       404:
 *         description: Tutorial was not found!
 *       500:
 *         description: Error updating Tutorial with id
 *
 */
router.get("/:id", tutorials.findOne);

/**
 * @swagger
 * /tutorials/{id}:
 *   put:
 *     summary: Update a Tutorial by the id in the request
 *     tags: [Tutorials]
 *     parameters:
 *       - name: id
 *         description: Tutorial title .
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: utorial was updated successfully..
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       400:
 *         description: Content can not be empty!
 *       404:
 *         description: Tutorial was not found!
 *       500:
 *         description: Some server error
 *
 */
router.put("/:id", tutorials.update);

/**
 * @swagger
 * /tutorials/{id}:
 *   delete:
 *     summary: Delete a Tutorial with the specified id in the request
 *     tags: [Tutorials]
 *     parameters:
 *       - name: id
 *         description: Tutorial title .
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Tutorial was deleted successfully!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       500:
 *         description: Could not delete Tutorial
 *
 */
router.delete("/:id", tutorials.delete);

/**
 * @swagger
 * /tutorials:
 *   delete:
 *     summary: Delete all Tutorials
 *     tags: [Tutorials]
 *     responses:
 *       200:
 *         description: Tutorials were deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       500:
 *         description: Some error occurred while removing all tutorials.
 *
 */
router.delete("/", tutorials.deleteAll);

export default router;
