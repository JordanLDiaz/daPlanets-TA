import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAllGalaxies)
      .post('', this.createGalaxy)
  }
  async getAllGalaxies(req, res, next) {
    try {
      const query = req.query
      const galaxies = await galaxiesService.getAllGalaxies(query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }
}