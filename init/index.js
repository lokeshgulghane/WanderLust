const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect('mongodb+srv://lokeshgulghane:dtjGBtFRAyLcXZq9@cluster0.fwdjpaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "68a3375c31e5b32320bca3b8" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();