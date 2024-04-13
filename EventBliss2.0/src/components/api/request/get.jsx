import { useQuery } from "react-query";
import axios from 'axios'

//----------REQUEST----------//
export function useListRequests(){
  const API = import.meta.env.VITE_BACKEND_API;

  return useQuery(['eventRequests'], async () => {
    const response = await axios.get(`${API}eventRequest`);
    return response.data;
  })
}
  

