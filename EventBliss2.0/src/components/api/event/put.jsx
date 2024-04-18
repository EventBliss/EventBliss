import axios from 'axios'

export function updateTask(id,data,organizers,organizerEmail){
    const API = import.meta.env.VITE_BACKEND_API
    console.log(data)
    const {name,price,category,image,description,isPackage} = data

    const organizerId = organizers.find(organizer => organizer.email == organizerEmail)?.id
    console.log(image)

    const formData = new FormData();
    formData.append('organizer', organizerId);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image); 
    category.forEach(categories => formData.append('category', categories));
    formData.append('price', price);
    formData.append('package', isPackage === 'No' ? false : true);

    return axios.put(`${API}events/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}


