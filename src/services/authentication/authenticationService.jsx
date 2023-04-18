import axios from "axios";
import { API_URL } from "../../constants";
import jwtInterceptor from "../jwtInterceptor";

export const signInService = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login/`, credentials);
  return response.data;
}

export const getProfileService = async () => {
  const response = await jwtInterceptor.get(`${API_URL}/auth/profile/`);
  return response.data;
};