const FormModel = require("../models/Form");

 const FormController = async (req, res) => {
  const newForm = new FormModel(req.body);

  try {
    const form = await newForm.save();

    return res.status(200).json({ form });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = FormController;