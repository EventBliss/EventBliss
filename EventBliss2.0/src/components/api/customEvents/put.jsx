import axios from 'axios'

/**
 * This funtion update the data of an custom event request
 * @param {*} id request id
 * @param {*} the new status (string)
 * @returns 
 */
export const updateCustomEventRequest = (id,status) => {
    const API = import.meta.env.VITE_BACKEND_API
    return axios.patch(`${API}customEvents/${id}/`, { status: status })
}