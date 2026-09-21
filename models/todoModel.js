import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
    },
    description: {
      type: String,
    },
  },

  { timestamps: true },
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
