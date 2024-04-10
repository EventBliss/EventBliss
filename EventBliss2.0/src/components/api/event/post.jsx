import { eventApi } from ".";

export function CreateEvent(data,organizers,organizerEmail){
    const organizerId = organizers.find(organizer => organizer.email == organizerEmail)?.id
    const {name,price,category,image,description,isPackage} = data
  
    const formData = new FormData();
    formData.append('organizer', organizerId);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image); 
    category.forEach(categories => formData.append('category', categories));
    formData.append('price', price);
    formData.append('package', isPackage === 'No' ? false : true);
  
    return eventApi.post('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }