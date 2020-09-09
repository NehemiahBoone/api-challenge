import mongoose from "mongoose"
const Schema = mongoose.Schema

const Cat = new Schema(
  {
    name: { type: String, required: true },
    colors: [{ type: String }],
    age: { type: Number, min: 0, default: 0 },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    // NOTE enum means that the value must be one of the following string values
    mood: { type: String, enum: ["happy", "bitey", "murderous"] }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Cat
