import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    published: { type: Boolean },
  },
  { timestamps: true }
);

const tutorial = mongoose.model("tutorial", tutorialSchema);

export default tutorial;
