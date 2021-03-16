const calcularValores = (n1: number, n2: number): void => {
  const soma = n1 + n2;
  const div = n1 / n2;
  const sub = n1 - n2;
  const mult = n1 * n2;

  console.log(`O resultado da soma é ${soma}`);
  console.log(`O resultado da div é ${div}`);
  console.log(`O resultado da sub é ${sub}`);
  console.log(`O resultado da mult é ${mult}`);
};

calcularValores(10, 20);
