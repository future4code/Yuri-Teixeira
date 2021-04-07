### Exercicio 1
a) rounds é a quantidade de vezes que será cripstografado, salt é afunção que
vai gerar o caracteres na criptografia de acordo com o salt; 
Recomendado 12;
Porque é um valor que vai criptografar bem sem exigir muito processamento;

c)
export const genHash = async (value: any) => {
  const rounds = Number(process.env.ENCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const hash = await bcrypt.hash(value, salt);
  console.log("HASH: ", hash);
  return hash;
};

export const cmpHash = async (
  hashA: string,
  hashB: string
): Promise<boolean> => {
  return bcrypt.compare(hashA, hashB);
};

### Exercicio 2
a)Primeiro eu tive que alterar o metodo signup pra ir coma senha criptografada. 
Pq se nao depois nao tem como comprar o hashes;

### Exercicio 3
feito tudo

### Exercicio 4
feito 

### Exercicio 5
feito

### Exercicio 6
