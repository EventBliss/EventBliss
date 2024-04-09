import { eventApi } from ".";

/**
 * This functions delete an event by the ID 
 * @param {*} eventId The id of the event
 * @returns None
 */
export const deleteEvent =(eventId)=>{
    return eventApi.delete(`/${eventId}`);
  };