const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("SoftPrim API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
