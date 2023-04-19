import axios from "axios";

const jwtInterceptor = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  headers: {
    Authorization: "Bearer ",
  },
});

jwtInterceptor.interceptors.request.use(
  (config) => {
    let token = JSON.parse(localStorage.getItem("user"));
    config.headers.Authorization = `Bearer ${token.access}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      console.log("401");
    }

    if (error.response.status === 403) {
      console.log("403");
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;
