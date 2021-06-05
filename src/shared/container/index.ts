import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/infra/typeorm/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/ISpecificationsRepository';

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