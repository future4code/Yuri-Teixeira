type spending = {
  value: number;
  date: string;
  description: string;
};

export type typeUser = {
  id: number;
  name: string;
  cpf: string;
  birthDay: string;
  balance: number;
  spending: spending[];
};

let users: typeUser[] = [
  {
    id: 1,
    name: "Oliver Sykes",
    cpf: "000.000.000-00",
    birthDay: "1995-06-30",
    balance: 250,
    spending: [],
  },
  {
    id: 2,
    name: "Marilyn Manson",
    cpf: "111.111.111-11",
    birthDay: "1990-06-30",
    balance: 2600,
    spending: [],
  },
  {
    id: 3,
    name: "Corey Taylor",
    cpf: "222.222.222-22",
    birthDay: "1997-06-30",
    balance: 900,
    spending: [],
  },
];

export default users;
