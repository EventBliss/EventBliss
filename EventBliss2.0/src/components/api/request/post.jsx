import {axios} from 'axios'
import { useState,useEffect } from 'react';

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
  
      }
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
  
