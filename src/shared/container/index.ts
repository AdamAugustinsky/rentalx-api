import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/infra/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/infra/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/infra/repositories/ISpecificationsRepository';
import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/CarsRepository';
import { ICarsRepository } from '../../modules/cars/infra/repositories/ICarsRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);  

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
)