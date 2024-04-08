import { useState, useEffect } from "react";
import { eventRequestsAPI } from "../request";
import { getEvents } from "../event/get";

/**
 * 
 * @param {*} events the list of events
 * @param {*} name the name of the organizer
 * @returns all the events made for this organizer
 */
export const organizerEvents = (organizeEmail) => { 
    const [events,setEvents] = useState([]);
  
    useEffect(() => {
      async function loadEvents(){
        const response = await getEvents();
        setEvents(response.data);
      }
      loadEvents();
    },[]);
    const event = events.filter(event => event.organizer_email == organizeEmail);
    return event
  }
  
export const organizerRequests = (organizerEmail) => {
    const [requests, setRequests]= useState([])
    useEffect(() => {
      async function loadEventRequests() {
        const response = await eventRequestsAPI();
        setRequests(response.data);
      }
      loadEventRequests();
    },[]);
    const eventRequests = requests.filter(request => request.organizer_email == organizerEmail);
    const requestInProgress = requests.filter(request => request.status == 'In progress')
    const resquestDenied = requests.filter(request => request.status == 'Denied')
    const requestApproved = requests.filter(request => request.status == 'Approved')
    const requestFinished = requests.filter(request => request.status == 'Finished')
    return [eventRequests,requestApproved,requestInProgress,resquestDenied,requestFinished]
  }