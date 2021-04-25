const router = require('express').Router();
const { Category } = require('../../models');

// GET /api/categories
router.get('/', (req, res) => {
    Category.findAll()
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/categories/1
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/categories
router.post('/', (req, res) => {
    // expects {id: '1', category-name: 'Shoes'}
    Category.create({
        id: req.body.id,
        category_name: req.body.category_name
    })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/categories/1
router.put('/:id', async (req, res) => {
    // expects {id: 1, category-name: 'Shoes'}
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    let cat = await Category.findOne({
        where: {
            id: req.params.id
        }
    })
    cat.category_name = req.body.category_name ? req.body.category_name : cat.category_name
    await cat.save();
    res.json(cat);
});

// DELETE /api/categories/1
router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;