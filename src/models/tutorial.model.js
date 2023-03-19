import mongoose from "mongoose";


/**
 * @swagger
 * components:
 *   schemas:
 *     Tutorial:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - published
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the tutorial
 *         title:
 *           type: string
 *           description: The title of your tutorial
 *         description:
 *           type: string
 *           description: The tutorial description
 *         published:
 *           type: boolean
 *           description: Whether you have published the tutorial
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the tutorial was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the tutorial was updated
 *       example:
 *         id: 64162674d8e8830c87bfc22e
 *         title: Tutorial on how to create an API
 *         description: In this tutorial I will teach you how to create an API with Node.js Express and Swagger
 *         published: false
 *         createdAt: 2023-03-10T04:05:06.157Z
 *         updatedAt: 2023-03-10T04:05:06.157Z
 */

const tutorialSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    published: { type: Boolean },
  },
  { timestamps: true }
);

tutorialSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const tutorial = mongoose.model("tutorial", tutorialSchema);

export default tutorial;
