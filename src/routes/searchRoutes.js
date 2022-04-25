const searchController = require('./../controllers/searchControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', searchController.searchAny)
router.get('/:category', searchController.listZone)
module.exports = router