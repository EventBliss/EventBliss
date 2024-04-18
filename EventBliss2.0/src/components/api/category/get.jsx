import { useQuery } from "react-query";
import axios from 'axios'

/**
 * This funtion get all the events from the API
 * @returns events
 */

export function useListCategory() {
  const API = import.meta.env.VITE_BACKEND_API;

  return useQuery(['Categoty'], async () => {
    const response = await axios.get(`${API}categories`);
    return response.data;
  });
}
