import CatSchema from "../models/Cat"
import mongoose from "mongoose"
import GalaxySchema from "../models/Galaxy"

class DbContext {
  Cats = mongoose.model("Cat", CatSchema)
  Galaxys = mongoose.model("Galaxy", GalaxySchema)
}

export const dbContext = new DbContext()
