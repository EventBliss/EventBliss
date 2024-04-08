import axios from 'axios'

//----------REQUEST----------//
export const eventRequestsAPI = axios.create({
    baseURL: 'http://localhost:8000/api/v1/eventRequest/',
  });
  

  