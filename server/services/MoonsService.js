import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PlanetsService {
  async find(query) {
    let planets = await dbContext.Planets.find(query)
    return planets
  }

  async findById(id) {
    let planet = await (await dbContext.Planets.findById(id)).populate("galaxy")
    if (!planet) {
      throw new BadRequest("Invalid id")
    }
    return planet
  }

  async create(body) {
    return await dbContext.Planets.create(body)
  }

  async edit(body) {
    let update = await dbContext.Planets.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Planets.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const planetsService = new PlanetsService()