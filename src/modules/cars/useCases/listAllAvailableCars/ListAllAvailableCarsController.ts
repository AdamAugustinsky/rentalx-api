import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllAvailableCarsUseCase } from "./ListAllAvailableCarsUseCase";

class ListAllAvailableCarsController {
  constructor() {}
  
  async handle(request: Request, response: Response) {
    const { brand, name, category_id } = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAllAvailableCarsUseCase
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string
    });

    return response.json(cars);
  }
}

export { ListAllAvailableCarsController}