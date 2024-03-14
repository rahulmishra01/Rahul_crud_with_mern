const Model = require("../model");

const createSchema = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await Model.findOne({ email });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: "this email is already exist",
      });
    }
    const data = await Model.create({
      name,
      email,
      password,
    });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "please enter valid email",
    });
  }
};

const getSchema = async (req, res) => {
  try {
    const data = await Model.find();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};
const singleSchema = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findById(id);
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "not a  valid id",
      });
    }
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

const updateSchema = async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = {
      name: req.body.name,
      email: req.body.email,
    };
    const data = await Model.findByIdAndUpdate(id, newUser, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "not a valid id",
      });
    }
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const deleteSchema = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "not a valid id",
      });
    }
    return res.status(200).json({
      success: true,
      message: "data has been deleted",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  createSchema,
  getSchema,
  singleSchema,
  updateSchema,
  deleteSchema,
};
