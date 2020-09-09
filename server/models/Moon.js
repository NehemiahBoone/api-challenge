import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    name: { type: String, required: true },
    planet: { type: ObjectId, ref: "Planet", required: true }
  }
)

export default Moon