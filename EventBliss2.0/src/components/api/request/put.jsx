import { eventRequestsAPI } from "."

/**
 * This funtion update the data of an event request
 * @param {*} id request id
 * @param {*} the new data (object)
 * @returns 
 */
export const updateEventRequest = (id,data) => {
    return eventRequestsAPI.put(`/${id}/`,data)
}