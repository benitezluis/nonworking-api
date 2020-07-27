import express from "express";
import bodyParser from "body-parser";
import db from "./db";
import routes from "./routes";

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Dias no laborables API");
});

db().then(async () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
