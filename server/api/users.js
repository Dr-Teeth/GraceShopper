const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', "firstN", "lastN", "isAdmin"]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(users)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { firstN, lastN, address, phone } = req.body;
    console.log(req.body)
    await User.update({ firstN, lastN, address, phone }, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
