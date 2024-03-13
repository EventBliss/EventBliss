import axios  from 'axios'
import { useEffect } from 'react';

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

function ListEvents(){
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
