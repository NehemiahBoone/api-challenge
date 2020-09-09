import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class GalaxysService {
  async find(query) {
    let galaxies = await dbContext.Galaxys.find(query)
    return galaxies
  }

  async findById(id) {
    let galaxy = await dbContext.Galaxys.findById(id)
    return galaxy
  }

  async create(body) {
    return await dbContext.Galaxys.create(body)
  }

  async edit(body) {
    let update = await dbContext.Galaxys.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Galaxys.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const galaxysService = new GalaxysService()