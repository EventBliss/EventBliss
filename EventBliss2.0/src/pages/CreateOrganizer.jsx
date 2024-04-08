import { useForm } from 'react-hook-form';
import 'react-image-upload/dist/index.css';
import Swal from 'sweetalert2';
import { TextInput, Textarea, MultiSelect, MultiSelectItem, NumberInput } from '@tremor/react';


export function CreateOrganizer() {
    const {register,handleSubmit,setValue} = useForm();
  

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
              <TextInput />
            </div>

            <div className="w-full px-3 mb-6">
                <label 
                htmlfor="phone"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
                >
                    Phone Number * </label>
                <NumberInput enableStepper={false} />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Description *
              </label>
              <Textarea placeholder="Type here..."/>
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="ubication"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                 Ubication *
              </label>
              <TextInput />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Email *
              </label>
              <TextInput />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Social Networks / Website 
              </label>
              <TextInput />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Event Type * 
              </label>
              <MultiSelect>
                <MultiSelectItem value="1">Weddings</MultiSelectItem>
                <MultiSelectItem value="2">Birthday</MultiSelectItem>
                <MultiSelectItem value="3">Graduation</MultiSelectItem>
              </MultiSelect>
            </div>

            <div className="w-full px-3 mb-6">
              
              <label className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2" for="multiple_files"> Images Events</label>
              <input className="appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white" id="multiple_files" type="file" multiple/>

            </div>

            <div className="w-full px-3 mb-6">
              
              <label className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"> Profile Photo * </label>
              <input className="appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white"  type="file"/>

            </div>

            <div className='w-full px-3 mb-6'>
              <label htmlFor="fileInput" className="appearance-none block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2">Upload Curriculum </label>
              <input
                type="file"
                id="fileInput"
                accept=".pdf"
                className='appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white'
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Switch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
