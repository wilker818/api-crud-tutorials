import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    published: { type: Boolean },
  },
  { timestamps: true }
);

tutorialSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const tutorial = mongoose.model("tutorial", tutorialSchema);

export default tutorial;
