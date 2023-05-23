import mongoose from "mongoose";
import db from "../../database/index";
const { Schema } = mongoose;

const favoriteSchema = new Schema({
  title: String,
  description: String,
  uri: String,
});

const favorite = db.model("Favorite", favoriteSchema);

export default favorite;
