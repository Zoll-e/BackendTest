const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require("body-parser");

app.use(express.json({ extended: true }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", require("./src/api/routes/posts"));
app.use("/posts",require("./src/api/routes/posts"));
app.use("/posts",require("./src/api/routes/posts"));



app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
