import {axios} from 'axios'

/**
 * This funtion update the data of an event request
 * @param {*} id request id
 * @param {*} the new data (object)
 * @returns 
 */
export const updateEventRequest = (id,data) => {
    const API = import.meta.env.VITE_BACKEND_API
    return axios.put(`${API}eventrequest/${id}`,data)
}