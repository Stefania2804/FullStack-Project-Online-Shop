const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const { category_id } = req.query;

    let query = `
      SELECT
        products.id,
        products.name,
        products.price,
        products.stock,
        products.category_id,
        categories.name AS category_name
      FROM products
      JOIN categories
        ON products.category_id = categories.id
    `;

    let values = [];

    if (category_id !== undefined) {
      const parsedId = Number(category_id);

      if (!Number.isInteger(parsedId) || parsedId <= 0) {
        return res.status(400).json({
          message: "category_id invalid",
        });
      }

      query += ` WHERE products.category_id = ?`;
      values.push(parsedId);
    }

    query += ` ORDER BY products.name ASC`;

    const [rows] = await db.query(query, values);

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Eroare la preluarea produselor",
    });
  }
});

module.exports = router;
