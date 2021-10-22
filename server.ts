const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, mongoUri } = require("./config");
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyparser.json());

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB database connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
