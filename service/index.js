import axios from "axios";
import { API_URL } from "../constants/env";

export const instance = axios.create({
  baseURL: API_URL,
});
