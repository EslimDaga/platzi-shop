import { API_URL } from "../../constants";
import axios from "axios";

export const getProductsService = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
