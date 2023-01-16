import axios from "axios";

const baseURL = process.env.REACT_APP_URL_GET_USERS;

export const api = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  baseURL,
});
