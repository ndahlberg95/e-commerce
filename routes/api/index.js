const router = require('express').Router();

const categoryRoutes = require('./category-routes.js');

router.use('/categories', categoryRoutes);

module.exports = router;