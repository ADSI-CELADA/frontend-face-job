import axios from "axios";

let url = "http://localhost:4000"
let token=document.cookie.replace('token=','')

export const singUpUser = async(values) =>
    await axios.post(`${url}/registroCliente`, values) 

export const singInUser = async (values) =>
  await axios.post(`${url}/loginCliente`, values);

export const loadInfoUser=async()=>
await axios.get(`${url}/dataUser`,{
  headers: {
    token: token,
  },
})
export const postsUserImages=async(param) =>
await axios.post(`${url}/user/postsimagenes/${param}`)



