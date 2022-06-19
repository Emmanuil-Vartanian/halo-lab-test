const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const productData = [
  {
    name: "orange Juice",
    category: "Drinks",
    price: 14.99,
  },
  {
    name: "Apples",
    category: "fruits",
    price: 4.99,
  },
  {
    name: "Tomatos",
    category: "vegetables",
    price: 6.39,
  },
  {
    name: "Coffee",
    category: "Drinks",
    price: 3.15,
  },
  {
    name: "Sweet Pepper",
    category: "Vegetables",
    price: 12.15,
  },
  {
    name: "Grapes",
    category: "FRUITS",
    price: 20.49,
  },
  {
    name: "Pears",
    category: "Fruits",
    price: 1.35,
  },
  {
    name: "Team",
    category: "Drinks",
    price: 0.5,
  },
];

const productPurchase = [];

app.get("/products", async (req, res) => {
  res.send(productData);
});

app.post("/product-purchase", async (req, res) => {
  try {
    productPurchase.push(req.body);
    console.log(productPurchase);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(error.status);
  }
});

app.listen(9000, () => console.log("Server start on, 9000 port"));
