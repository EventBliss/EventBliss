import { useState,useEffect } from "react";
import { useForm } from 'react-hook-form';
import { CreateEvent,organizerAPI,categoryApi } from "../components/Api";
import 'react-image-upload/dist/index.css';
import Swal from 'sweetalert2';


export function CreateOrganizer() {
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
    
    const onSubmit =  async (data) => {
        Swal.fire({
          title: 'Created organizer!',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000
        });

        setTimeout(() => {
          window.location.href = '/';
        }, 2500);
    };
  
    return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2016/03/05/19/32/affair-1238429_1280.jpg")',
        }}
      ></div>

      <div className="">
        <div className="max-w-screen-lg mx-auto py-28">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-8 p-10 bg-white rounded-md shadow-lg space-y-4 relative z-10 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2">
              <div className="text-center">
                <h3 className="block uppercase text-3xl font-bold dark:text-[#FD8B11]">
                  Switch to organizer 
                </h3>
              </div>
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Name / Company *
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required/>
            </div>

            <div className="w-full px-3 mb-6">
                <label 
                htmlfor="phone"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
                >
                    Phone Number * </label>
                <input 
                type="tel" 
                id="phone" className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                required/>
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
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required/>
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="name"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required/>
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
                required
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Social Networks / Website 
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
