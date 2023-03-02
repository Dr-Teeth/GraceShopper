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
    type: Sequelize.STRING,
    defaultValue: 'https://cdn-icons-png.flaticon.com/512/7057/7057942.png',
    isUrl: true
  }
})



module.exports = Products;
