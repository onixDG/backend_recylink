const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req,res) => res.json({message: []}))
    .post((req,res) => res.json({message: 'Animal Saved'}));

//router.route('/:id')
    //.get()
    //.put()
    //.delete()

module.exports = router;