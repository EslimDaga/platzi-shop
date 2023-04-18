import axios from "axios";
import { API_URL } from "../../constants";

export const signInService = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login/`, credentials);
  return response.data;
}