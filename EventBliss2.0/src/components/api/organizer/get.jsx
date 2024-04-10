import { useQuery } from "react-query";
import axios from 'axios'

export function useListOrganizers() {
  const API = import.meta.env.VITE_BACKEND_API;

  return useQuery(['Organizer'], async () => {
    const response = await axios.get(`${API}organizers`);
    return response.data;
  });
}

/**
 * 
 * @param {*} events the list of events
 * @param {*} name the name of the organizer
 * @returns all the events made for this organizer
 */
export const organizerData = () => {

}