'use strict'

const {db, models: {User, Products} } = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
 const users = await Promise.all([
    User.create({ username: 'cody', password: '123', email: 'cody@gmail.com' }),
    User.create({ username: 'ron', password: '123', email: 'ron@aol.com' }),
    User.create({ username: 'chris', password: '123', email: 'chris@gmail.com' }),
    User.create({ username: 'ryan', password: '123', email: 'ryan@hotmail.com' }),
  ]);

  const products = await Promise.all([
    Products.create({ name: "Van 1", description: "This is a description of Van 1", price: 1000,  quantity: 0, imageUrl: "https://cdn-icons-png.flaticon.com/512/7057/7057942.png"})
  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      ron: users[1],
      chris: users[2],
      ryan: users[3]
    },
    products: {
      products
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
