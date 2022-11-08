const express = require("express");
const app = express();

const { fetchDataAsJson } = require("./cmd.js");

const port = process.env.PORT || 3000;

app.use(require("cors")());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json("This is just a dummy");
});

app.post("/", async (req, res) => {
  const { qwiklabsUrl } = req.body;

  try {
    const data = await fetchDataAsJson(qwiklabsUrl);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      error: {
        message: err,
      },
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
