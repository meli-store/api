const URL_MERCADOAPI = "https://api.mercadolibre.com";
const URL_GET_SEARCH = "/sites/MCO/search?q=";

export const getProductsByKeyword = async (keyword) => {
  const response = await fetch(`${URL_MERCADOAPI}${URL_GET_SEARCH}${keyword}`);
  const data = await response.json();
  return data;
};
