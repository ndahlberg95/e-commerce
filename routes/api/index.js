const router = require('express').Router();

const categoryRoutes = require('./category-routes.js');
router.use('/categories', categoryRoutes);

const productRoutes = require('./product-routes.js');
router.use('/products', productRoutes);

const productTagRoutes = require('./product-tag-routes.js');
router.use('/product-tags', productTagRoutes);

const tagRoutes = require('./tag-routes.js');
router.use('/tags', tagRoutes);

module.exports = router;