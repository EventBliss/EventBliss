import { eventApi } from ".";
import { useEffect,useState } from "react";

export const getEvents = () => {
    return eventApi.get('/');
};

/**
 * This funtion get all the events from the API
 * @returns events
 */

export function ListEvents(){
    const [events,setEvents] = useState();
  
    useEffect(() => {
      async function loadEvents() {
        const response = await getEvents();
        setEvents(response.data)
      }
      loadEvents();
    },[]);

    return events;
}