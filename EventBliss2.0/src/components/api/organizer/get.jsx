import { useQuery } from "react-query";
import axios from 'axios'
import { useListRequests } from "../request/get";
import { useListEvents } from "../event/get";

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
export const useOrganizerData =  (organizerEmail) => {
  const {data:requestData} =  useListRequests();
  const {data:eventData} = useListEvents();

  const organizerEvents = eventData.filter((request) => request.organizer_email === organizerEmail)

  const organizeData = requestData.filter((request) => request.organizer_email === organizerEmail)

  //REQUEST NUMBER
  const requestNumber = organizeData.length
  
  //REQUESTS IN PROGRESS
  const requestInProgress = organizeData.map((request) => request.status === 'In progress')
  const requestInProgressNumber = requestInProgress.length
  
  //REQUESTS FINISHED
  const requestFinished = organizeData.map((request) => request.status === 'Finished')
  const requestFinishedNumber = requestFinished.length

  //REQUESTS IN THE PAST YEAR
  const currentYear = new Date().getFullYear();

  const lastYearRequests = organizeData.filter(request => {
    const createdYear = new Date(request.created).getFullYear();
    return createdYear === currentYear - 1;
  })

  const lastYearRequestsNumber = lastYearRequests.length;

  //REQUESTS IN THIS YEAR
  const currentYearRequests = organizeData.filter(request => {
    const createdYear = new Date(request.created).getFullYear();
    return createdYear === currentYear;
  });
  
  const currentYearRequestsNumber = currentYearRequests.length;

  return [organizerEvents,organizerEvents,requestNumber,requestInProgressNumber,requestFinishedNumber,lastYearRequestsNumber,currentYearRequestsNumber]

}