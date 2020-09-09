import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class MoonsService {
  async find(query) {
    let moons = await dbContext.Moons.find(query).populate("planet")
    return moons
  }

  async findById(id) {
    let moon = await dbContext.Moons.findById(id).populate("planet")
    if (!moon) {
      throw new BadRequest("Invalid id")
    }
    return moon
  }

  async create(body) {
    return await dbContext.Moons.create(body)
  }

  async edit(body) {
    let update = await dbContext.Moons.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Moons.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const moonsService = new MoonsService()