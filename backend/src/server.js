const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

//Mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/Aircnc", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("conectado ao Aircnc");
  })
  .catch(err => {
    console.log("error ao conectar no banco " + err);
  });

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

const port = 3001;

app.listen(port, function() {
  console.log("Running on port " + port);
});
//mongodb+srv://thallysbraz:<password>@dbaircnc-rbrer.mongodb.net/test?retryWrites=true&w=majority
