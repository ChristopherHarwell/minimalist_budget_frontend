const router = require("express").Router();
const { find} = require("./expenses.model.js");

router.get("/", (req, res) => {
  find()
    .then((budget) => {
      res.json(budget);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get budget" });
    });
});

module.exports = router;
