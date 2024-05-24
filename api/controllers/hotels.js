import hotelModel from "../models/Hotel.js";

const createHotel = async (req, res, next) => {
  try {
    const newHotel = await hotelModel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    next(error);
  }
};
const updateHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedHotel = await hotelModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
const deleteHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    await hotelModel.findByIdAndDelete(id);
    res.status(201).json({ message: "Hotel has been deleted" });
  } catch (error) {
    next(error);
  }
};
const getHotelById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Hotel = await hotelModel.findById(id);
    res.status(201).json(Hotel);
  } catch (error) {
    next(error);
  }
};
const getHotels = async (req, res, next) => {
  try {
    const Hotels = await hotelModel.find();
    res.status(201).json(Hotels);
  } catch (error) {
    next(error);
  }
};

export { createHotel, updateHotel, deleteHotel, getHotelById, getHotels };
