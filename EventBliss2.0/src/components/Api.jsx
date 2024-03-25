import axios  from 'axios'
import { useEffect, useState } from 'react';


//----------EVENTS----------//
const eventApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/events/',
});

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
      };
      loadEvents();
    },[]);

    return events;
};
//----------EVENTS----------//



//----------CLIENT----------//
export const clientAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1/clients/',
});

export const createClient = (client) => {
  return clientAPI.post('/',client);
};
//----------CLIENT----------//



//----------ORGANIZER----------//
const organizerAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1/clients/',
});

export const createOrganizer = (organizer) => {
  return organizerAPI.post('/',organizer);
};
//----------ORGANIZER----------//