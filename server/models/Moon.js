import mongoose from "mongoose"
const Schema = mongoose.Schema

const Moon = new Schema(
  {
    name: { type: String, required: true }
  }
)

export default Moon