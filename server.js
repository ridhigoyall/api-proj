const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// const products_roots = require("./Roots/product");

// app.use("/api/products", products_roots);
app.get("/", (req, res) => {
  res.send("hello my name is Ridhi");
});
const middleware = (req, res, next) => {
  console.log("Hello my Middleware");
  next();
};
// app.get("/", (req, res) => {
//   res.send("hello my name is Ridhi");
// });

app.get("/about", middleware, (req, res) => {
  res.send("hello my name is Ridhi");
});
app.get("/contact", middleware, (req, res) => {
  res.send("hello my name is Ridhi");
});
app.get("/testimonial", middleware, (req, res) => {
  res.send("hello my name is Ridhi");
});
app.listen(PORT, () => {
  console.log(`this is port ${PORT}`);
});
