import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>;
  create({}: ICreateSpecificationDTO): Promise<void>;
  // list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
