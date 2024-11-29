import axios from "axios";

export const API_URL = 'https://jsonplaceholder.org/';
export const TYPICODE_URL = 'https://jsonplaceholder.typicode.com/';

const Api = axios.create({
  baseURL: API_URL
})

const TypiApi = axios.create({
  baseURL: TYPICODE_URL
})

export { Api, TypiApi };
