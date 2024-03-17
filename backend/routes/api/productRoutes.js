const express = require('express')
const createCategoryControler = require('../../controllers/createCategoryControler')
const _ = express.Router()

_.post("/createcategory",createCategoryControler)


module.exports = _