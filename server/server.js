const express = require("express");
const morgan = require("morgan");
const helmet = require('helmet')

const app = express();
const port = process.env.PORT || 4000;

const routes = require("./routes/routes");

// middleware to be able to use json
app.use(helmet())
app.use(express.json());
app.use(morgan("dev"));

// Serve up static assets on production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", routes);

app.get("*", (req, res) => {
  res.status(404).send("Nothing exist here bad request");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
