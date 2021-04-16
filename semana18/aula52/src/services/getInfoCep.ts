import axios from "axios";

const getInfoCep = (cep: string) => {
  const result = axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => {
      return {
        logradouro: res.data.logradouro,
        bairro: res.data.bairro,
        cidade: res.data.localidade,
        estado: res.data.uf,
      };
    });

  return result;
};

export default getInfoCep;
