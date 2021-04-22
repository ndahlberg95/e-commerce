const router = require('express').Router();
const { ProductTag } = require('../../models');

// GET /api/product-tags
router.get('/', (req, res) => {
    ProductTag.findAll()
        .then(dbProductTagData => res.json(dbProductTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/product-tags/1
router.get('/:id', (req, res) => {
    ProductTag.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductTagData => {
            if (!dbProductTagData) {
                res.status(404).json({ message: 'No product tag found with this id' });
                return;
            }
            res.json(dbProductTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/product-tags
router.post('/', (req, res) => {
    // expects {id: '1', product-id: '1', tag-id: '1'}
    ProductTag.create({
        id: req.body.id,
        product_id: req.body.product_id,
        tag_id: req.body.tag_id
    })
        .then(dbProductTagData => res.json(dbProductTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/product-tags/1
router.put('/:id', (req, res) => {
    // expects {id: '1', product-id: '1', tag-id: '1'}
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    ProductTag.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbProductTagData => {
            if (!dbProductTagData[0]) {
                res.status(404).json({ message: 'No product tag found with this id' });
                return;
            }
            res.json(dbProductTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/product-tags/1
router.delete('/:id', (req, res) => {
    ProductTag.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductTagData => {
            if (!dbProductTagData) {
                res.status(404).json({ message: 'No product tag found with this id' });
                return;
            }
            res.json(dbProductTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;