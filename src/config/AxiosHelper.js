import axios from "axios";

export const baseURL = "http://localhost:7070";
export const httpClient = axios.create({
  baseURL: baseURL,
});