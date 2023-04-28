const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  files: {
    data: Buffer,
    contentType: String,
  },
  moderator: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  rigor_rank: {
    type: Number,
    required: true,
  },
  attendees: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Events", EventSchema);
