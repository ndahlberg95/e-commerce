const router = require('express').Router();
const { ProductTag } = require('../../models');

// GET /api/tags
router.get('/', (req, res) => {
    Tag.findAll()
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/tags/1
router.get('/:id', (req, res) => {
    Tag.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({ message: 'No tag found with this id' });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/tags
router.post('/', (req, res) => {
    // expects {id: '1', tag-name: 'tag'}
    Tag.create({
        id: req.body.id,
        tag_name: req.body.tag_name
    })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/tags/1
router.put('/:id', (req, res) => {
    // expects {id: '1', tag-name: 'tag'}
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Tag.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbTagData => {
            if (!dbTagData[0]) {
                res.status(404).json({ message: 'No tag found with this id' });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/tags/1
router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({ message: 'No tag found with this id' });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;