const mongoose = require("mongoose");
const express = require("express");

const contact = require("./Model.js/contact.modal")


const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mongoURI ="mongodb://localhost:27017";

app.get("/contact" , async (req, res )=>{
  const contacts = await contact.find();
  res.send(contacts)
});
app.post("/contact" , async (request, response )=>{
  const contacts = await contact.create(request.body);

  response.send(contacts)
});









mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("connected");
    app.listen(3001);
  })
  .catch((err) => {
    console.log("There was an Error" + err);
  });