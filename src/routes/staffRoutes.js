const staffController = require('./../controllers/staffControllers.js')
const express = require('express');
const router = express.Router();

router.get('/:grL/:id', staffController.index)
router.get('/', staffController.staff01)
router.get('/reservas/:idReserve', staffController.getByReserve)
router.get('/cadastro', staffController.createID);
module.exports = router