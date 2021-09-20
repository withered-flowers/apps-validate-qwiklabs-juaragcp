const path = require("path");

const express = require("express");
const app = express();

const { fetchDataAsJson } = require("./cmd.js");

const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(require("cors")());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const { qwiklabsUrl } = req.body;
  try {
    const data = await fetchDataAsJson(qwiklabsUrl);

    res.render("details", { data });
  } catch (err) {
    res.send("Not a Valid Quests URL");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
