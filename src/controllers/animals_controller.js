const animalsController = {};

animalsController.getAnimals = (req,res) => res.json({message: []})

animalsController.createAnimal = (req,res) => res.json({message: 'Animal Saved'})

animalsController.updateAnimal = (req,res) => res.json({message: 'Animal Updated'})

animalsController.deleteAnimal = (req,res) => res.json({message: 'Animal Deleted'})

module.exports = animalsController;