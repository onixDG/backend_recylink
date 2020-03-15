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

animalsController.deleteAnimal = async (req, res) => {
    await Animal.findByIdAndDelete(req.params.id)
    res.json('Animal Deleted');
}

animalsController.updateAnimal = async (req, res) => {
    const { name, date } = req.body;
    await Animal.findByIdAndUpdate(req.params.id, {
        name,
        date
    });
    res.json('Animal Updated');
}

module.exports = animalsController;

