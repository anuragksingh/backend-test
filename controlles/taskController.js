import Todo from "../models/todoModel.js";

// Create Product
export const createTask = async (req, res, next) => {
  const {title, description} = req.body;

  if (!title || !description) {
    return res.status(400).json({
      sucess: false,
      message: "Please enter title and description",
    });
  }

  let task = await Todo.create({ title, description });
  res.status(201).json({
    sucess: true,
    task: {
        title,
        description
    },
    message: "Your task has been created successfully",
  });
};
