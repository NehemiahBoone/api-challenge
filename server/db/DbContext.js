import CatSchema from "../models/Cat";
import mongoose from "mongoose";

class DbContext {
  Cats = mongoose.model("Cat", CatSchema);
}

export const dbContext = new DbContext();
