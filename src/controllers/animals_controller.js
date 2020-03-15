const animalsController = {};

const animalModel = require('../models/Animal');

animalsController.getAnimals = async (req,res) => {
    const animals = await animalModel.find()
    res.json(animals)
}

animalsController.createAnimal = (req,res) => res.json({message: 'Animal Saved'})

animalsController.updateAnimal = (req,res) => res.json({message: 'Animal Updated'})

animalsController.deleteAnimal = (req,res) => res.json({message: 'Animal Deleted'})

module.exports = animalsController;