const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  name: { type: String, required: true },
  lat: { type: String, required: true },
  lng: { type: String, required: true }
});

const Place = mongoose.model("Place", placesSchema);

module.exports = Place;
