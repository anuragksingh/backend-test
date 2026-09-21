import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [
        25,
        "Invalid name, Please enter a name with less than 25 characters",
      ],
      minLength: [3, "Name should contain more than 3 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
