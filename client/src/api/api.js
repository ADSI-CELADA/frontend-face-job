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
export const sendMailEmail = async (values) =>
  await axios.post(`${url}/senMailEmail`, values);

export const validateCodeEmail = async (param,values) =>
await axios.post(`${url}/recoveryEmail/${param}`, values);


export const updatePasswordEmail = async (param,values) =>
await axios.put(`${url}/updatePassEmail/${param}`, values);

