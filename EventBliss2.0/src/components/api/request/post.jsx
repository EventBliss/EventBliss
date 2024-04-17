import axios from 'axios'

/**
 * This function create a new event request by the client
 * @param {*} organizerEmail 
 * @param {*} clientEmail 
 * @param {*} eventId 
 * @param {*} data 
 * @param {*} clientData 
 * @param {*} organizerData 
 * @returns 
 */
export const CreateEventRequest = (organizerEmail,clientEmail,eventId,data,clientData,organizerData) =>{
    const API = import.meta.env.VITE_BACKEND_API


    const {location,date,start_time,comment,end_time} = data

    const clientId = clientData.find(client => client.email === clientEmail)?.id;
    console.log(clientId)

    const organizerId = organizerData.find(organizer => organizer.email === organizerEmail)?.id;

    console.log(organizerId)

    const formData = new FormData()
    formData.append('client', clientId)
    formData.append('organizer', organizerId)
    formData.append('event',eventId)
    formData.append('event_location',location)
    formData.append('event_date', date + ' ' + start_time)
    formData.append('ending_time', date + ' ' + end_time)
    formData.append('comment', comment)

    return axios.post(`${API}eventRequest/`,formData)
  }
  
