import { Specification } from "../models/Specification";

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
