//importing requried packages
const express = require("express");
const router = express.Router();
const validateUser = require('../middleware/validateUserTokenHandler');
const {scrapedData} = require('../controllers/productController');
//this middleware for only the logged-in user can scrap data 
router.use(validateUser);

router.post("/scrap", scrapedData);

module.exports = router;
