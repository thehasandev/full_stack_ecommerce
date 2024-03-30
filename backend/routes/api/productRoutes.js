const express = require('express')
const createCategoryControler = require('../../controllers/createCategoryControler')
const allcategorisControler = require('../../controllers/allcategorisControler')
const createSubCategoriControler = require('../../controllers/createSubCategoriControler')
const allSubcategorisControler = require('../../controllers/allsubcategorisControler')
const createProductController = require('../../controllers/createProductControler')
const multer  = require('multer')
const allProductController = require('../../controllers/allProductControler')

const _ = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, + '-' + uniqueSuffix+file.originalname )
    }
  })
const upload = multer({ storage: storage })

_.post("/createcategory",createCategoryControler)
_.post("/createsubcategory",createSubCategoriControler)
_.get("/allcategory",allcategorisControler)
_.get("/allsubcategory",allSubcategorisControler)
_.post("/createproduct",upload.single('avatar'),createProductController)
_.get("/allproduct",allProductController)


module.exports = _