import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3000" });

/*

http.interceptors.request.use(function (config) {
  config.headers.authorization = `BEARER ${localStorage.getItem("token")}`;
  return config;
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && location.pathname !== "/admin/login") {
      
      localStorage.removeItem("token");
      //window.location.replace("/admin/login");
    }

    return Promise.reject(error);
  }
);
*/