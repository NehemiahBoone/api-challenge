import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class StarsService {
  async find(query) {
    let stars = await dbContext.Stars.find(query)
    return stars
  }

  async findById(id) {
    let star = await (await dbContext.Stars.findById(id))
      .populate("galaxy")
    if (!star) {
      throw new BadRequest("Invalid id")
    }
    return star
  }

  async create(body) {
    return await dbContext.Stars.create(body)
  }

  async edit(body) {
    let update = await dbContext.Stars.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Stars.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const starsService = new StarsService()