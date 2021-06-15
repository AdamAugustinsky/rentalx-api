import { Router } from "express";
import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationCotroller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", ensureAuthenticated, ensureIsAdmin, createSpecificationController.handle);

export { specificationsRoutes };