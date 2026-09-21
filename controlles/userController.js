import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

// User Register here
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      success: true,
      name,
      email,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// User Login here
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email or Password cannot be empty",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user._id }, "anurag", {
      expiresIn: "7d",
    });


    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
