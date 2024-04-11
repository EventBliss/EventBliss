import {axios} from 'axios'
import { useListClients } from '../client';
import { useListOrganizers } from '../organizer/get';

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
export const useCreateEventRequest = (organizerEmail,clientEmail,eventId,location,comment,date) =>{
    const API = import.meta.env.VITE_BACKEND_API
    const {data:clientData} = useListClients()
    const {data: organizerData} = useListOrganizers();

    const clientId = clientData.find(client => client.email === clientEmail)?.id;

    const organizerId = organizerData.find(organizer => organizer.email === organizerEmail)?.id;
    
    if (clientId && organizerId) {
      try {
          axios.post(`${API}eventRequest/`,{
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
    return null
  }
  
