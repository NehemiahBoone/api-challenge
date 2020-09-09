import mongoose from "mongoose"
const Schema = mongoose.Schema

const Star = new Schema(
  {
    name: { type: String, required: true }
  }
)

export default Star