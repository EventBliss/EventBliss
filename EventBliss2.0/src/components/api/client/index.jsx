import axios from 'axios'
import { useQuery } from "react-query";

//----------CLIENT----------//

export function useListClients() {
  const API = import.meta.env.VITE_BACKEND_API;

  return useQuery(['Client'], async () => {
    const response = await axios.get(`${API}clients`);
    return response.data;
  });
}

  
export const createClient = (client) => {
    const API = import.meta.env.VITE_BACKEND_API
    return axios.post(`${API}clients/`,client);
};
  