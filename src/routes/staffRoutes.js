const staffController = require('./../controllers/staffControllers.js')
const express = require('express');
const router = express.Router();

router.get('/', staffController.index)
router.get('/01', staffController.staff01)
router.get('/reservas/:idReserve', staffController.getByReserve)
router.get('/cadastro/:idStaff', staffController.createID);
module.exports = router