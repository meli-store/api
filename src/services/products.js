import { BehaviorSubject } from "rxjs";

const URL_MERCADOAPI = "https://api.mercadolibre.com";
const URL_GET_SEARCH = "/sites/MCO/search?q=";
const URL_GET_PRODUCT_BY_ID = "/items/";

const products = new BehaviorSubject([]);

const getByUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProducts = () => {
  return products;
};

export const setProducts = (data) => {
  products.next(data);
};

export const getProductsByKeyword = async (keyword) => {
  return await getByUrl(`${URL_MERCADOAPI}${URL_GET_SEARCH}${keyword}`);
};

export const getProductById = async (id) => {
  return await getByUrl(`${URL_MERCADOAPI}${URL_GET_PRODUCT_BY_ID}${id}`);
};


