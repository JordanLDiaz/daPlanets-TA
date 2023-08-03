import { dbContext } from "../db/DbContext.js";

class GalaxiesService {
  async getAllGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }
}

export const galaxiesService = new GalaxiesService();