import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/favorites";

// Set up a connection to the MongoDB database using Mongoose
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("this is the error", error));

const db = mongoose.connection;

export default db;
