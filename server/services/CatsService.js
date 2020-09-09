import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CatsService {
  async find(query = {}) {
    let cats = await dbContext.Cats.find(query);
    return cats;
  }
  async findById(id) {
    let cat = await dbContext.Cats.findById(id);
    if (!cat) {
      throw new BadRequest("Invalid Id");
    }
    return cat;
  }
}

export const catsService = new CatsService();