import express from "express"
import BaseController from "../utils/BaseController"
import { starsService } from "../services/StarsService"
import { planetsService } from "../services/PlanetsService"


export class StarsController extends BaseController {
  constructor() {
    super("api/stars")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/planets", this.getPlanetsByStarId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await starsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await planetsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      let data = await planetsService.find({ star: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await starsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await starsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await starsService.delete(req.params.id)
      res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}