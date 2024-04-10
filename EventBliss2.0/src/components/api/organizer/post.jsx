import { organizerAPI } from ".";

export const createOrganizer = (data) => {
    const { name, email, phone, profile_photo, cover_letter, eventTypes, curriculum, linkedin, instagram, other, location } = data;
    
    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('profile_photo', profile_photo[0])
    formData.append('cover_letter', cover_letter)
    eventTypes.forEach(eventType => formData.append('event_types', eventType))
    formData.append('curriculum', curriculum[0])
    formData.append('linkedin', linkedin)
    formData.append('instagram', instagram)
    formData.append('other', other)
    formData.append('location', location)
    
    return organizerAPI.post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    });
};
