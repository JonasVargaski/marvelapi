import axios from "axios";
import env from "../../utils/env";
import md5 from "js-md5";

const api = axios.create({
  baseURL: env.marvel_baseurl,
});

api.interceptors.request.use((request) => {
  request.params = request.params || {};

  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + env.marvel_private_key + env.marvel_public_key);

  request.params["ts"] = timestamp;
  request.params["apikey"] = env.marvel_public_key;
  request.params["hash"] = hash.hex();

  return request;
});

api.interceptors.response.use((response) => {
  if (response.status === 200 && response.data?.data) {
    response.data = response.data.data;
  }

  if (!response.data) {
    response.data = {};
  }

  return response;
});

export default api;
