import axios from 'axios'

export function updateTask(id,data){
    const API = import.meta.env.VITE_BACKEND_API
  
    const {name,price,category,image,description,isPackage} = data
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image); 
    category.forEach(categories => formData.append('category', categories));
    formData.append('price', price);
    formData.append('package', isPackage === 'No' ? false : true);

    return axios.put(`${API}events/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}