import { Router } from "express";
import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { ListAllAvailableCarsController } from "../../../../modules/cars/useCases/listCars/ListAllAvailableCarsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const carsRoutes = Router();

let createCarController = new CreateCarController();
let listAllAvailableCarsController = new ListAllAvailableCarsController();

carsRoutes.post("/", ensureAuthenticated, ensureIsAdmin, createCarController.handle);

carsRoutes.get("/available", listAllAvailableCarsController.handle);

export { carsRoutes };