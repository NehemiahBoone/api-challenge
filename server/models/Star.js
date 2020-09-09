import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Star = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    galaxy: { type: ObjectId, ref: "Galaxy", required: true }
  }
)

export default Star