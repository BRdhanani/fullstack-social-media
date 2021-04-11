import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await User.findOne({
      email,
    });
    if (!exist)
      return res.status(404).json({
        message: "user doesn't exist",
      });
    const passwordMatch = await bcrypt.compare(password, exist.password);
    if (!passwordMatch)
      return res.status(400).json({
        message: "your password is incorrect",
      });
    const token = jwt.sign(
      {
        email: exist.email,
        id: exist._id,
      },
      "test",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      result: exist,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const signup = async (req, res) => {
  try {
    const { email, password, confirmPassword, firstname, lastname } = req.body;
    const exist = await User.findOne({
      email,
    });
    if (exist)
      return res.status(400).json({
        message: "user already exist",
      });
    if (password !== confirmPassword)
      return res.status(400).json({
        message: "password doesn't match",
      });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "test",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      result,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
