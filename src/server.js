const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(bodyParser.json());
const db = {
  users: [],
  products: [],
  orders: [],
};

app.use((req, res, next) => {
  req.db = db
  next();
});


app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
