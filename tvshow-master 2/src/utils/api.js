import { post, get } from "./network";
import config from "../config.js";

export const searchShowSearch = (searchTerm) => {
  return get(`${config.SEARCH_API}${searchTerm}`);
}