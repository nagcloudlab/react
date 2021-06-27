import axios from "axios";

export function getItems() {
  let items = "http://localhost:8080/api/items";
  return axios.get(items);
}
