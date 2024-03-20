const express = require('express')
const createCategoryControler = require('../../controllers/createCategoryControler')
const allcategorisControler = require('../../controllers/allcategorisControler')
const createSubCategoriControler = require('../../controllers/createSubCategoriControler')
const _ = express.Router()

_.post("/createcategory",createCategoryControler)
_.post("/createsubcategory",createSubCategoriControler)
_.get("/allcategory",allcategorisControler)


module.exports = _