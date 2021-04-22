export interface User {
  nome: string;
  saldo: number;
  nacionality: NACIONALITY;
  age: number;
}

enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

interface Casino {
  name: string;
  location: LOCATION;
}

interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export const performPurchase = (
  user: User,
  value: number
): User | undefined => {
  if (user.saldo >= value) {
    return { ...user, saldo: user.saldo - value };
  }

  return undefined;
};

export function verifyAge(casino: Casino, users: User[]): Result {
  const newResult: Result = {
    brazilians: {
      allowed: [],
      unallowed: [],
    },
    americans: {
      allowed: [],
      unallowed: [],
    },
  };

  if (casino.location === LOCATION.BRAZIL) {
    users.map((user) => {
      if (user.nacionality === NACIONALITY.BRAZILIAN) {
        if (user.age >= 18) {
          newResult.brazilians.allowed.push(user.nome);
        } else {
          newResult.brazilians.unallowed.push(user.nome);
        }
      } else {
        if (user.age >= 21) {
          newResult.americans.allowed.push(user.nome);
        } else {
          newResult.americans.unallowed.push(user.nome);
        }
      }
    });
  }
}
