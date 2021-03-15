//1a) utilizamos process.argv[2], a partir do indice 2, pois o 0 e 1 sáo reservados pelo node.

//1b)
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`);

//1c)
console.log(
  `Olá, ${process.argv[2]}! Você tem ${
    process.argv[3]
  } anos. Daqui sete anos vooce terá ${parseInt(process.argv[3]) + 7}`
);

