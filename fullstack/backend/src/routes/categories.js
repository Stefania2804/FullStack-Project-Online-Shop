const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT id, name, slug
      FROM categories
      ORDER BY name ASC
    `);

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Eroare la preluarea categoriilor",
    });
  }
});

module.exports = router;
