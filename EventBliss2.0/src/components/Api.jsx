import axios  from 'axios'
import { useEffect, useState } from 'react';


//----------EVENTS----------//
const eventApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/events/',
});

export const categoryApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/categories/',
});

export const getEvents = () => {
    return eventApi.get('/');
};


/**
 * This functions delete an event by the ID 
 * @param {*} eventId The id of the event
 * @returns None
 */
export const deleteEvent =(eventId)=>{
  return eventApi.delete(`/${eventId}`);
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


export function CreateEvent(data,organizers,organizerEmail){
  const organizerId = organizers.find(organizer => organizer.email == organizerEmail)?.id
  const {name,price,category,image,description,isPackage} = data

  const formData = new FormData();
  formData.append('organizer', organizerId);
  formData.append('name', name);
  formData.append('description', description);
  formData.append('image', image); 
  category.forEach(category => formData.append('category', category));
  formData.append('price', price);
  formData.append('package', isPackage === 'No' ? false : true);

  return eventApi.post('/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//----------CATEGORIES----------//
/**
 * this function get all the categories
 * @param events the list of events
 * @returns the different types of categories
 */
export function Categories(events){
    const event_categories = events.map((event) => event.category_names)
    
    return event_categories
};


//----------CLIENT----------//
export const clientAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1/clients/',
});

export const createClient = (client) => {
  return clientAPI.post('/',client);
};



//----------REQUEST----------//
const eventRequestsAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1/eventRequest/',
});

const postEVentRequest = (data) => {
  return eventRequestsAPI.post('/',data)
}


/**
 * This function create a new event request by the client
 * @param {*} organizerEmail 
 * @param {*} clientEmail 
 * @param {*} eventId 
 * @param {*} location 
 * @param {*} comment 
 * @param {*} date 
 * @returns 
 */
export const createEventRequest = (organizerEmail,clientEmail,eventId,location,comment,date) =>{
  const [clients,setClients] = useState([]);
  const [organizers,setOrganizers] = useState([]);

  useEffect(() => {
    async function loadClientsAndOrganizers(){
      const organizerResponse = await organizerAPI();
      const clientResponse = await clientAPI();
      setOrganizers(organizerResponse.data);
      setClients(clientResponse.data);

    };
    loadClientsAndOrganizers();
    postRequest(organizerEmail,clientEmail,eventId,location,comment,date);
  },[]);

  const postRequest = async (organizerEmail,clientEmail,eventId,location,comment,date) => {
    const clientId = clients.find(client => client.email === clientEmail)?.id;
    const organizerId = organizers.find(organizer => organizer.email === organizerEmail)?.id;
    if (clientId && organizerId) {
      try {
        await postEVentRequest({
          client: clientId,
          organizer: organizerId,
          event: eventId,
          event_location: location,
          event_date: date,
          comment: comment
        });
        console.log('Evento creado exitosamente');
      } catch (error) {
        console.error('Error al crear el evento:', error);
      }
    } else {
      console.error('No se pudo encontrar el ID del cliente u organizador');
    }
  };

  return null
}

/**
 * This function delete an events request by the id 
 * @param {*} eventRequestId 
 * @returns 
 */
export const deleteEventRequest = (eventRequestId) => {
  return eventRequestsAPI.delete(`/${eventRequestId}`)
}



//----------ORGANIZER----------//
export const organizerAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1/organizers/',
});


export const createOrganizer = (organizer) => {
  return organizerAPI.post('/',organizer);
};


/**
 * 
 * @param {*} events the list of events
 * @param {*} name the name of the organizer
 * @returns all the events made for this organizer
 */
export const organizerEvents = (organizeEmail) => { 
  const [events,setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents(){
      const response = await getEvents();
      setEvents(response.data);
    };
    loadEvents();
  },[]);
  const event = events.filter(event => event.organizer_email == organizeEmail);
  return event
}

export const organizerRequests = (organizerEmail) => {
  const [requests, setRequests]= useState([])
  useEffect(() => {
    async function loadEventRequests() {
      const response = await eventRequestsAPI();
      setRequests(response.data);
    };
    loadEventRequests();
  },[]);
  const eventRequests = requests.filter(request => request.organizer_email == organizerEmail);
  const requestInProgress = requests.filter(request => request.status == 'In progress')
  const resquestDenied = requests.filter(request => request.status == 'Denied')
  const requestApproved = requests.filter(request => request.status == 'Approved')
  const requestFinished = requests.filter(request => request.status == 'Finished')
  return [eventRequests,requestApproved,requestInProgress,resquestDenied,requestFinished]
}


/**
 * This funtion update the data of an event request
 * @param {*} id request id
 * @param {*} the new data (object)
 * @returns 
 */
export const updateEventRequest = (id,data) => {
  return eventRequestsAPI.put(`/${id}/`,data)
}