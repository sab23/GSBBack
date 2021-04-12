var express = require('express')
const authentificationController = require('../controllers/authentification.controller')
let router = express()

router.post('/', authentificationController.searchByLogin)


module.exports = router