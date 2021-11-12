import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  create({}: ICreateSpecificationDTO): void;
  // list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
