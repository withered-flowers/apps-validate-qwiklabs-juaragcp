const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "pug");

app.use(require("cors")());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
