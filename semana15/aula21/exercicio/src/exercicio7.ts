enum CLASS {
  UNDERWEAR = "UNDERWEAR",
  SUMMER = "SUMMER",
  SWINSUIT = "SWINSUIT",
  WINTER = "WINTER",
}

type product = {
  name: string;
  price: number;
  class: CLASS;
};

const tshirt: product = {
  name: "tshirt",
  price: 29.99,
  class: CLASS.SWINSUIT,
};

const short: product = {
  name: "short",
  price: 99.99,
  class: CLASS.UNDERWEAR,
};

const helmet: product = {
  name: "helmet",
  price: 49.99,
  class: CLASS.SUMMER,
};

const necklare: product = {
  name: "necklare",
  price: 9.99,
  class: CLASS.WINTER,
};

const newPriceBlackFriday = (arrayPdt: product[]) => {
  let newArray = [...arrayPdt];

  return newArray.map((pdt) => {
    const discount = (): number => {
      switch (pdt.class) {
        case CLASS.SWINSUIT:
          return 0.04;
        case CLASS.SUMMER:
          return 0.05;
        case CLASS.WINTER:
          return 0.1;
        case CLASS.UNDERWEAR:
          return 0.07;
      }
    };

    return {
      ...pdt,
      newPrice: pdt.price - pdt.price * discount(),
    };
  });
};

console.log(newPriceBlackFriday([tshirt, helmet, necklare, short]));
