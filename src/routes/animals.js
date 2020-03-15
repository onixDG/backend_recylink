const { Router } = require('express');
const router = Router();

const { getAnimals, createAnimal, deleteAnimal, updateAnimal } = require('../controllers/animals_controller');

router.route('/')
    .get(getAnimals)
    .post(createAnimal);

router.route('/:id')
    .delete(deleteAnimal)
    .put(updateAnimal);

module.exports = router;