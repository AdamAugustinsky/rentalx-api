import { Router } from "express";
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
    id: uuidV4()
  })

  return response.status(201).send();
})


export { categoriesRoutes };