const db = require('./db')

const User = require('./models/User');
const Products = require('./models/Products');
const OrderHistory = require('./models/OrderHistory');

// Define associations
User.hasMany(OrderHistory);
OrderHistory.belongsTo(User);

// User.belongsToMany(Products, { through: 'carts' });
Products.belongsToMany(User, { through: { model: 'User', unique: false, foreignKey: 'carts' } });


module.exports = {
  db,
  models: {
    User,
    Products,
    OrderHistory,
  },
}
