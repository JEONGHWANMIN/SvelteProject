import axios from 'axios';

// Base apiClient
const apiClient = axios.create({
  baseURL: 'http://localhost:8000/',
});

// @HTTP : GET
// @Route : /products
export async function getProduct() {
  const response = await apiClient.get('/products');
  return response.data;
}
