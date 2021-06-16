import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListAllAvailableCarsController } from "../../../../modules/cars/useCases/listCars/ListAllAvailableCarsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const carsRoutes = Router();

let createCarController = new CreateCategoryController();
let listAllAvailableCarsController = new ListAllAvailableCarsController();

carsRoutes.post("/", ensureAuthenticated, ensureIsAdmin, createCarController.handle);

carsRoutes.get("/available", listAllAvailableCarsController.handle);

export { carsRoutes };