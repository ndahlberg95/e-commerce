const Category = require ('../models/Category');
const cat = new Category({category_name: 'shoes'})
cat.save();