import mongoose from "mongoose"
import GalaxySchema from "../models/Galaxy"

class DbContext {
  Galaxys = mongoose.model("Galaxy", GalaxySchema)
}

export const dbContext = new DbContext()
