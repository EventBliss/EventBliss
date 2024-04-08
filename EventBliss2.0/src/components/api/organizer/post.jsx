import { organizerAPI } from ".";

export const createOrganizer = (organizer) => {
    return organizerAPI.post('/',organizer);
};
  