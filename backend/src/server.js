const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

/*mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://thallysbraz:cavalo-1000@dbaircnc-rbrer.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
*/

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

app.use(express.json());

app.use(routes);

app.listen(3000);
//mongodb+srv://thallysbraz:<password>@dbaircnc-rbrer.mongodb.net/test?retryWrites=true&w=majority
