import { useState,useEffect } from "react";
import { useForm } from 'react-hook-form';
import { CreateEvent,organizerAPI,categoryApi } from "../components/Api";
import ImageUploader from 'react-image-upload';
import 'react-image-upload/dist/index.css'

export function FormsEvent() {
  const [organizers,setOrganizers] = useState([]);
  const [categories,setCategories]= useState([]);
  const {register,handleSubmit,setValue} = useForm();

  useEffect(() => {
    async function loadOrganizersAndCategories(){
      const response = await organizerAPI();
      const categories = await categoryApi()
      setCategories(categories.data)
      setOrganizers(response.data)
    };
    loadOrganizersAndCategories();
  },[]);
  
  const getImageFileObject = (imageDataUrl) => {
    setValue('image', imageDataUrl.dataUrl)
  };

  const onSubmit =  async (data) => {
      await CreateEvent(data, organizers,'ashley1@gmail.com');
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2020/09/18/21/13/wedding-photography-5582980_1280.jpg")',
        }}
      ></div>

      <div className="bg-[#E6E5E4]">
        <div className="max-w-screen-lg mx-auto py-28">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-8 p-10 bg-white rounded-md shadow-lg space-y-4 relative z-10 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2">
              <div className="text-center">
                <h3 className="block uppercase text-3xl font-bold dark:text-[#FD8B11]">
                  Create an Event
                </h3>
              </div>
            </div>

            {/*Campo nombre del evento */}
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                {...register('name', {required: true})}
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="package"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Is a Package? 
              </label>
              <select className="select select-bordered w-full max-w-xs"
                {...register('isPackage', {required: true})}>
                <option defaultValue>No</option>
                <option>Yes</option>
  
              </select>
            </div>
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Price *
              </label>
              <input
                type="number"
                id="price"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                {...register('price', {required: true})}
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="ubication"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Ubication *
              </label>
              <input
                type="text"
                id="ubication"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                {...register('location', {required: true})}
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="tipoEvento"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Event type *
              </label>
              <select className="select select-bordered w-full max-w-xs"
              multiple
                {...register('category', {required: true})}>
                <option defaultValue>Event Type</option>
                {categories.map((category) =>
                  <option key={category.id} value={category.id}>{category.name}</option>
                )
                }
                
              </select>
            </div>
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                rows="4"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register('description', {required: true})}

              />
            </div>
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Event Image
              </label>
              <ImageUploader
              buttonText="Choose images"
              imgExtension={['.jpg', '.png']}
              maxFileSize={5242880}
              singleImage={true}
              onFileAdded={(img) => getImageFileObject(img)}
              {...register('image', {required: true})}
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
