const Sequelize = require('sequelize')
const db = require('../db')


 const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.BIGINT
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  imageUrl: {
    type: Sequelize.TEXT,
    isUrl: true
  }
})

module.exports = Products;
