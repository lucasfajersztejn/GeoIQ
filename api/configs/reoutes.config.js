const express = require("express");
const router = express.Router();
const Survey = require("../models/survey.model");

// Ruta para crear una nueva encuesta
router.post("/surveys", async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ message: "Error saving survey", error });
  }
});

router.get("/surveys", async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(400).json({ message: "Error fetching surveys", error });
  }
}); 

module.exports = router;