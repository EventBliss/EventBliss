import axios from 'axios'

//----------ORGANIZER----------//
export const organizerAPI = axios.create({
    baseURL: 'http://localhost:8000/api/v1/organizers/',
});
  



  
  