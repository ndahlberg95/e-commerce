const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        validate: {isDecimal: true},
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {isNumeric: true},
        allowNull: false,
        defaultValue: 10
        
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Category',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product'
    }
  );

module.exports = Product;