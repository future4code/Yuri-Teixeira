import UserBusiness from "../src/business/UserBusiness";
import IdGenerator from "./mockNewUserId";
import { USER_ROLES } from "../src/model/User";

describe("Nova suite de testes", () => {
  test("testando ID", async () => {
    expect.assertions(1);

    try {
      expect(IdGenerator.generate()).toEqual(
        "883ecd66-35cb-4c55-b790-e98405bdbc7d"
      );
    } catch (error) {
      console.log(error.message);
    }
  });

  test("retornar erro se usuario for invalido", async () => {
    expect.assertions(1);
    try {
      const result = await UserBusiness.getUserById(IdGenerator.generate());

      expect(result).toBe({
        id: "883ecd66-35cb-4c55-b790-e98405bdbc7d",
        name: "Yuri",
        email: "yuri@",
        role: "NORMAL",
      });
    } catch (error) {
      console.log(error.message);
    }
  });

  test("testando erro de usuário invalido", async () => {
    expect.assertions(2);

    try {
      await UserBusiness.getUserById("");
    } catch (error) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toEqual("User not found");
      console.log(error.message);
    }
  });

  test("desafio 3/4: ", async () => {
    expect.assertions(2);
    try {
      await UserBusiness.getAllUsers(USER_ROLES.NORMAL);
    } catch (error) {
      expect(error.message).toEqual(
        "You must be an admin to access this endpoint"
      );
      expect(error.statusCode).toBe(401);
    }
  });
});
