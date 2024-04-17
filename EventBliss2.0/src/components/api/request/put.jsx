import axios from 'axios'

/**
 * This funtion update the data of an event request
 * @param {*} id request id
 * @param {*} the new data (object)
 * @returns 
 */
export const updateEventRequest = (id,status) => {
    const API = import.meta.env.VITE_BACKEND_API
    return axios.patch(`${API}eventRequest/${id}/`, { status: status })
}