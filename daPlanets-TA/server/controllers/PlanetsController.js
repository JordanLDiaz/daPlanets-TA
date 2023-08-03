import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAllPlanets)
      .post('', this.createPlanet)
  }
  async getAllPlanets(req, res, next) {
    try {
      const query = req.query
      const planets = await planetsService.getAllPlanets(query)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }
}