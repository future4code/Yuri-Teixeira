### Exercicio 1
a)
export interface User {
  nome: string;
  saldo: number;
}

b)
export const performPurchase = (user: User, value: number): User | undefined => {
  if (user.saldo >= value) {
    return { ...user, saldo: user.saldo - value };
  }

  return undefined;
};

### Exercicio 2

a) b) c)
describe("Testes", () => {
  test("Maior do que o valor da compra", () => {
    const user: User = {
      nome: "Eu",
      saldo: 600,
    };
    expect(performPurchase(user, 400)).toEqual({ nome: "Eu", saldo: 200 });
  });

  test("Igual valor da compra", () => {
    const user: User = {
      nome: "Eu",
      saldo: 400,
    };
    expect(performPurchase(user, 400)).toEqual({ nome: "Eu", saldo: 0 });
  });

  test("Menor doque  valor da compra", () => {
    const user: User = {
      nome: "Eu",
      saldo: 399,
    };
    expect(performPurchase(user, 400)).toBe(undefined);
  });
});