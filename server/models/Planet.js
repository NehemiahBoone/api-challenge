import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    name: { type: String, required: true },
    water: { type: Boolean, required: true },
    star: { type: ObjectId, ref: "Star", required: true }
  }
)

export default Planet