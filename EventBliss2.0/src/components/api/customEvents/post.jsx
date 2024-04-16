import axios from 'axios'

export function CreateCustomEvent(data,organizers,organizerEmail){
  const API = import.meta.env.VITE_BACKEND_API

  const organizerId = organizers && organizers.find(organizer => organizer.email == organizerEmail)?.id 

  const {event_name,contact_email,amount_people,location,start_time,date,end_time,estimated_price,eventType,descrption,phone_number,full_name} = data
  
  const formData = new FormData();
  formData.append('client', );
  formData.append('organizer', );
  formData.append('event_name', );
  formData.append('contact_email', ); 
  formData.append('amount_people', ); 
  formData.append('location', ); 
  formData.append('start_date', ); 
  formData.append('phone', ); 
  formData.append('ending_time', );
  formData.append('event_type',);
  formData.append('comment',);
  formData.append('estimated_price',);

  return axios.post(`${API}customEvents/`, formData);
  }