import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class GalaxysService {
  async find(query) {
    let galaxies = await dbContext.Galaxys.find(query)
    return galaxies
  }

  async findById(id) {

  }

  async create(body) {

  }

  async edit(body) {

  }

  async delete(id) {

  }
}

export const galaxysService = new GalaxysService()