const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {OrdersModel} = require("./model/OrdersModel");
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

app.get('/allHoldings',async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});

  res.json(allHoldings);

});


app.get('/allPositions',async(req,res)=>{
  let allPositions = await PositionsModel.find({});

  res.json(allPositions);

});

app.post('/newOrder',async(req,res)=>{

  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    
    price: req.body.price,
   
    mode: req.body.mode,
  });


  newOrder.save();

  res.send("Order saved!");

});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
