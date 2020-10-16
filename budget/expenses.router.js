const router = require("express").Router();
const { find,addItem } = require("./expenses.model.js");

router.get("/", (req, res) => {
  find()
    .then((budget) => {
      res.json(budget);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get budget" });
    });
});

router.post("/", (req, res) => {
  const budgetData = req.body;

  addItem(budgetData)
    .then((budget) => {
      res.status(201).json(budget);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to add to budget" });
    });
});

module.exports = router;
