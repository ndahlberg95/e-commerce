const router = require('express').Router();
const { ProductTag } = require('../../models');

// GET /api/products
router.get('/', (req, res) => {
    Product.findAll()
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/products/1
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/products
router.post('/', (req, res) => {
    // expects {id: '1', product-id: 'Zappos', price: '40.00', stock: '12', category-id: '1'}
    Product.create({
        id: req.body.id,
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/products/1
router.put('/:id', (req, res) => {
    // expects {id: '1', product-id: 'Zappos', price: '40.00', stock: '12', category-id: '1'}
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData[0]) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/products/1
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;