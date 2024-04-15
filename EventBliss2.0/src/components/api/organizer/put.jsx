import axios from 'axios'

export const updateOrganizer = (id,data) => {
    const API = import.meta.env.VITE_BACKEND_API;
    
    const { name, email, phone, profile_photo, cover_letter, eventTypes, curriculum, linkedin, instagram, other, location } = data;
    console.log(data)
    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('profile_photo', profile_photo)
    formData.append('cover_letter', 'cover_letter')
    eventTypes.forEach(eventType => formData.append('event_types', eventType))
    formData.append('curriculum', curriculum)
    formData.append('linkedin', linkedin)
    formData.append('instagram', instagram)
    formData.append('other', other)
    formData.append('location', location)

    console.log(formData)
    
    return axios.put(`${API}organizers/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    });
};
