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

  
export const createClient = async (username, email, phone_number) => {
  const client = {
    name: username,
    email: email,
    phone: phone_number
  }
  try {
    const API = import.meta.env.VITE_BACKEND_API;
    const response = await axios.post(`${API}clients/`, client);
    return response.data;
  } catch (error) {
    console.error(error); // Log error en la consola para depuración
    throw error; // Lanza el error para que sea manejado en el componente que llama a esta función
  }
};

