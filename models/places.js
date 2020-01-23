const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  lat: { type: String, required: true },
  lng: { type: String, required: true }
});

const Place = mongoose.model("Place", placesSchema);

module.exports = Place;
