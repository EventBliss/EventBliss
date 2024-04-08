import axios  from 'axios'

//----------EVENTS----------//
export const eventApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/events/',
});
