import axios from "axios";

const instance = axios.create({
  baseURL: "https://chat2021backend.herokuapp.com",
});

export default instance;
