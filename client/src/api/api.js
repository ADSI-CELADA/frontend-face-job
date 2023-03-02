import axios from "axios";

let url = "http://localhost:4000/";

export const singInUser = async (values) =>
  await axios.post(`${url}loginCliente`, values);
