import { useQuery } from "react-query";
import axios from 'axios'
import { useListRequests } from "../request/get";
import { useListEvents } from "../event/get";
import { requestByYear } from "./requestByYear";

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
export const useOrganizerData = (organizerEmail) => {
  const { data: requestData } = useListRequests();
  const { data: eventData } = useListEvents();

  const filterData = (status) => {
    const requesStatus = organizerData.filter((request) => request.status === status);
    return requesStatus.length;
  }

  // Verifica si hay datos disponibles antes de filtrar
  const organizerData = requestData ? requestData.filter((request) => request.organizer_email === organizerEmail) : [];

  // Verifica si hay datos disponibles antes de realizar cualquier cálculo
  const organizerEvents = eventData ? eventData.filter((event) => event.organizer_email === organizerEmail) : [];
  
  // REQUEST NUMBER
  const requestNumber = organizerData.length;

  // REQUESTS IN PROGRESS
  const requestInProgress = filterData('In progress')

  // REQUESTS FINISHED
  const requestFinished = filterData('Finished')

  const pastYearRequest = requestByYear(organizerData,1)
  const currentYearRequest = requestByYear(organizerData)

  return [
    {
      organizerEvents,
      requestNumber,
      requestInProgress,
      requestFinished,
      pastYearRequest,
      currentYearRequest
    }
  ]
};
