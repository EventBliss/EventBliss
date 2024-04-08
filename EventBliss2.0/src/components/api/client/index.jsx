import axios from 'axios'
//----------CLIENT----------//

export const clientAPI = axios.create({
    baseURL: 'http://localhost:8000/api/v1/clients/',
  });
  
  export const createClient = (client) => {
    return clientAPI.post('/',client);
  };
  