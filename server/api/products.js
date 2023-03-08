const router = require("express").Router();
const {
  models: { Products },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id, {
      attributes: ['id', 'name', 'description', 'price', 'quantity', 'imageUrl'],
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/user/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    await Order.destroy({
      where: {
        userId: userId
      }
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.delete("/:itemId", async (req, res, next) => {
  try {
    const deletedProduct = await Products.findByPk(req.params.itemId);
    deletedProduct.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// This is the admin route (:
router.delete("/:id", async (req, res, next) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, description, price, quantity, imageUrl } = req.body;
    await Products.update(
      { name, description, price, quantity, imageUrl },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description, price, quantity, imageUrl } = req.body;
    await Products.create({ name, description, price, quantity, imageUrl }),
      res.status(200).json({ message: "Product Created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
