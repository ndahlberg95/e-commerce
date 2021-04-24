const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');


Product.belongsTo(Category)
Category.hasMany(Product)
Product.belongsToMany(Tag, {
    through: ProductTag
})
Tag.belongsToMany(Product, {
    through: ProductTag
})

module.exports = { Category, Product, ProductTag, Tag };