import axios from "axios"

let url = "http://localhost:4000/"

export const singUpUser = async(values) =>
    await axios.post(`${url}registroCliente`, vallues) 