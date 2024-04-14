import axios from 'axios'
import { useQuery } from "react-query";
import { useListClients } from '../client';
import { useListOrganizers } from '../organizer/get';

export function useListCustomEvents(){
    const API = import.meta.env.VITE_BACKEND_API;

    return useQuery(['customEvents'], async () => {
      const response = await axios.get(`${API}customEvents`);
      return response.data;
    });
}

/**
 * This function returns all the request made for the client
 * @param {*} clientEmail 
 * @returns 
 */
export function useListClientCustomEvents(clientEmail){

    const {data} = useListClients();
    const {data:customEvents} = useListCustomEvents();

    const clientId = data.find(client => client.email == clientEmail)?.id

    return customEvents.filter(customEvent => customEvent.client == clientId)

}

/**
 * This function returns all the request from the different clients that the organizer has
 * @param {*} organizerEmail 
 * @returns 
 */
export function useListOrganizerCustomEventsRequest(organizerEmail){

    const {data} = useListOrganizers();
    const {data:customEvents} = useListCustomEvents();

    const organizerId = data.find(organizer => organizer.email == organizerEmail)?.id

    return customEvents.filter(customEvent => customEvent.organizer == organizerId)

}