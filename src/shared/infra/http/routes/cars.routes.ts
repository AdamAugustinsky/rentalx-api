import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const carsRoutes = Router();

let createCarController = new CreateCategoryController();

carsRoutes.post("/", ensureAuthenticated, ensureIsAdmin, createCarController.handle);

export { carsRoutes };