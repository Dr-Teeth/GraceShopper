const Sequelize = require('sequelize')
const db = require('../db')


const OrderHistory = db.define('orderhistory', {
  type: Sequelize.ARRAY(Sequelize.STRING)
}) // Return upon further investigation


module.exports = OrderHistory;
