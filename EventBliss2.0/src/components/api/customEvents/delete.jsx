import axios from 'axios'
/**
 * This functions delete an event by the ID 
 * @param {*} eventId The id of the event
 * @returns None
 */
export const deleteCustomRequest =(requestId)=>{
  const API = import.meta.env.VITE_BACKEND_API
  return axios.delete(`${API}customEvents/${requestId}`);
};