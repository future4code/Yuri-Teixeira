//2
const calc = (op, n1, n2) => {
  const v1 = Number(n1);
  const v2 = Number(n2);
  switch (op) {
    case "sum":
      return "O resultado da soma é: " + (v1 + v2);
    case "mult":
      return "O resultado da multiplicação é: " + v1 * v2;
    case "sub":
      return "O resultado da subtração é: " + (v1 - v2);
    case "div":
      return "O resultado da divisão é: " + v1 / v2;

    default:
      return "Erro";
      break;
  }
};