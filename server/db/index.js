const db = require('./db')

const User = require('./models/User');
const Products = require('./models/Products');
const Order = require('./models/Order');

// Define associations
User.hasMany(Order);
Order.belongsTo(User);

// Products and Orders have a many-to-many relationship
Products.belongsToMany(Order, { through: 'OrderProduct' });
Order.belongsToMany(Products, { through: 'OrderProduct' });

module.exports = {
  db,
  models: {
    User,
    Products,
    Order,
  },
}