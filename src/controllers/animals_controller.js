const animalsController = {};

const Animal = require('../models/Animal');

animalsController.getAnimals = async (req,res) => {
    const animals = await Animal.find()
    res.json(animals)
}

animalsController.createAnimal = async (req, res) => {
    const { name } = req.body;
    const newAnimal = new Animal({
        name
    });
    await newAnimal.save();
    res.json('New Animal added');
};

animalsController.updateAnimal = (req,res) => res.json({message: 'Animal Updated'})

animalsController.deleteAnimal = (req,res) => res.json({message: 'Animal Deleted'})

module.exports = animalsController;

