const express = require('express')
const createCategoryControler = require('../../controllers/createCategoryControler')
const allcategorisControler = require('../../controllers/allcategorisControler')
const createSubCategoriControler = require('../../controllers/createSubCategoriControler')
const allSubcategorisControler = require('../../controllers/allsubcategorisControler')
const createProductController = require('../../controllers/createProductControler')

const _ = express.Router()

_.post("/createcategory",createCategoryControler)
_.post("/createsubcategory",createSubCategoriControler)
_.get("/allcategory",allcategorisControler)
_.get("/allsubcategory",allSubcategorisControler)
_.post("/createproduct",createProductController)


module.exports = _