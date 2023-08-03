import { dbContext } from "../db/DbContext.js";

class PlanetsService {
  async getAllPlanets(query) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }
  async createPlanet(planetData) {
    const newPlanet = await dbContext.Planets.create(planetData)
    return newPlanet
  }

}

export const planetsService = new PlanetsService();