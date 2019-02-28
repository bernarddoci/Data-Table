import axios from "axios";

const instance = axios.create({
  baseURL: `https://britecore-395e0.firebaseio.com/`,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default instance;
