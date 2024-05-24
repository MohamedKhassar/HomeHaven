import userModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  return token;
};

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User has been created" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (user) {
      const hashedPassword = user.password;
      const isMatch = await bcrypt.compare(req.body.password, hashedPassword);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid credentials" });
      }
      const { password, isAdmin, ...rest } = user._doc;
      const token = createToken(user);
      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ ...rest, token });
    }
    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    next(error);
  }
};
