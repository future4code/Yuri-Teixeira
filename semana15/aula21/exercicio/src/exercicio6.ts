const verifyAge = (year: number, acdc: string = "DC")  => {
  if (acdc.toUpperCase() === "AC") {
    if (year >= 100000) {
      return "Pré-História";
    } else if (year >= 4000) {
      return "Idade antiga";
    }
  } else {
    if (year <= 476) {
      return "Idade media";
    } else if (year <= 1453) {
      return "Idade moderna";
    } else if (year <= 1789) {
      return "Idade conteporânea";
    } else {
      return "Período não encontrado";
    }
  }
};

console.log(verifyAge(500,"DC"));
