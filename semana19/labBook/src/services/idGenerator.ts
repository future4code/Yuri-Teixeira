import { v4 } from "uuid";

export default class idGenerator {
  generateId = (): string => v4();
}
