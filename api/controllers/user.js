import userModel from "../models/User.js";

const createUser = async (req, res, next) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    await userModel.findByIdAndDelete(id);
    res.status(201).json({ message: "user has been deleted" });
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
const getUsers = async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

export { createUser, updateUser, deleteUser, getUserById, getUsers };
