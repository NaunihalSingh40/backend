// const mongoose = require("mongoose");

// const uri = process.env.mDbUri;
// console.log("Attempting to connect to database:", uri);

// mongoose.set("debug", true); // Enable debug logs for mongoose

// const connect = async() => {
//     await mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("Database connected successfully!");
//   })
//   .catch((err) => {
//     console.error("Error while connecting to the database:", err);
//   });

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose connected to database");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("Mongoose connection error:", err);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("Mongoose disconnected from database");
// });
// }

// connect();

const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.mDbUri).then( ()=>{
      console.log("db connected");
      
    });
}

module.exports = connectDB;