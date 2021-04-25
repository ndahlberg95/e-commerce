const Category = require ('../models/Category');
const cat = new Category({category_name: 'shoes'});
cat.save();

const Product = require('../models/Product');
const pro = new Product({product_name: 'brown-boots', price: 60.00, stock: 12, category_id: 1});
pro.sav();

const ProductTag = require('../models/ProductTag');
const proTag = new ProductTag({product_id: 1, tag_id: 1})
proTag.sav();

const Tag = require ('../models/Tag');
const tag = new Tag({tag_name: 'tag'});
tag.save();
