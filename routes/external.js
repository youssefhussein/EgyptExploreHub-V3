const express = require('express')
const apiRouter = express.Router()
const packages = require('../controllers/packages')




apiRouter.get('/', packages.packages_json)

module.exports = apiRouter