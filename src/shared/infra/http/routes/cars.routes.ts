import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";

const carsRoutes = Router();

let createCarController = new CreateCategoryController();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes };