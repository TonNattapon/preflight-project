const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 3001;

const router = require("./router");

dotenv.config();

console.log(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/todos", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
