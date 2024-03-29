const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

//Getting the create   project ejs page 
router.get('/create/:id', productController.renderCreate);

//Creating the product
router.post('/create/:id', productController.createProduct);

//Getting all of the products of a specific project 
router.get('/all/:projectId', productController.getAllProducts);

//Getting Lon and lat via Json for front and map update 
router.get('/map/:projectId', productController.getLonLat);


//Updating the specifc product based on its projectId and its own _id
router.post('/update/:projectId/:id', productController.updateProduct);

//Rendring the edit ejs for product 
router.get('/:projectId/:id', productController.renderUpdate);

//Getting one product based on its Id and pass it to front for creating the map with lon and lat 
router.get('/update/:projectId/:id', productController.getDataLonLat);


router.post('/delete/:projectId/:id', productController.deleteProduct);
router.get('/delete/:projectId/:id', productController.renderDelete);


//NOt used  
router.get('/:id', productController.getProductById);


//Rendering the Report Ejs
router.get('/report/:projectId/:id', productController.renderReport);

//The main function for calculating report betwenn two periods and send email
router.post('/report/:projectId/:id', productController.reportProduct);

//Graphical representation of a read only project 
router.get('/report/graph/:projectId/:id', productController.renderGraph);


//History Report
router.get('/report/history/:projectId/:id', productController.historyReport);

router.get('/report/graph/data/:projectId/:id', productController.renderGraphJSON);
router.get('/report/daily/data/:projectId/:id', productController.dailyDataReport);



module.exports = router;
