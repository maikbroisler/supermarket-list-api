const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const app = express();
const port = 3333;

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017/test");
}



app.use(express.json());

app.listen(port, () => {
  connectDatabase().catch((error) => {
    console.log(`Error connecting database: ${error}`);
  });
  app.use('/', routes);
  console.log('App is running at port 3333');
});