import axios from 'axios'


export function CreateCustomEvent(data,organizerEmail,clientEmail,clients,organizers){
    const API = import.meta.env.VITE_BACKEND_API

    const {event_name,contact_email,amount_people,location,start_time,date,end_time,stimated_price,eventType,description,phone_number} = data

    const organizerId = organizers && organizers.find(organizer => organizer.email == organizerEmail)?.id 

    const clientId = clients && clients.find(client => client.email == clientEmail)?.id 

    const formData = new FormData();
    formData.append('client', clientId);
    formData.append('organizer', organizerId);
    formData.append('event_name', event_name);
    formData.append('contact_email', contact_email ); 
    formData.append('amount_people', amount_people); 
    formData.append('location', location); 
    formData.append('start_date', date + ' ' + start_time); 
    formData.append('phone', phone_number ); 
    formData.append('ending_time', date + ' ' + end_time);
    formData.append('event_type',eventType);
    formData.append('comment',description);
    formData.append('estimated_price', stimated_price);

   return axios.post(`${API}customEvents/`, formData);
  }