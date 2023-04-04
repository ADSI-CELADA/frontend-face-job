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

export const updateDataUser = async (values) =>
await axios.post(`${url}/updateInfoU`,values,{headers:{token: token,}});

export const deleteDataUser = async (values) =>
await axios.post(`${url}/deleteClient`,values,{
  headers: {
    token: token,
  },
});

/* catalogo */
export const consultProfessions = async (param) =>
await axios.get(`${url}/consultCategories/${param}`,{
  headers: {
    token: token,
  },
})

export const consultProfileProfessions = async (param) =>
await axios.get(`${url}/consultProfile/${param}`);

/*Pasarela de pagos*/

export const checkout = async (values) =>
await axios.post(`${url}/checkout`,values);

export const updatePack = async (values) =>
await axios.post(`${url}/updatePack/`,values,{headers:{token: token,}});