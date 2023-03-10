import axios from "axios";

let url = "http://localhost:4000"
let token=document.cookie.replace('token=','')

export const createPostImage= async (param,data) =>
  await axios.post(`${url}/user/createpost/${param}`, data);

  export const getPostsUser= async (param) =>
  await axios.get(`${url}/user/postsimagenes/${param}`);


  