import { useForm,Controller } from 'react-hook-form';
import 'react-image-upload/dist/index.css';
import Swal from 'sweetalert2';
import { Textarea, MultiSelect, MultiSelectItem, NumberInput } from '@tremor/react';
import { TextInputComp } from '../components/TextInput';
import { createOrganizer } from '../components/api/organizer/post';
import { useListCategory } from '../components/api/category/get';
import { useListOrganizers } from '../components/api/organizer/get';

export function CreateOrganizer() {
    const {handleSubmit,register,control,reset} = useForm();

    const {data:categoryData} = useListCategory()
    const {data: organizerData} = useListOrganizers()


    const onSubmit =  async (data) => {
      const userEmail = data.email;
      if (userEmail == organizerData.map((organizer) => organizer.email)){
        console.log("A user with the same email has made this request")
      }else{
        console.log(data)
        createOrganizer(data)
        reset()
        Swal.fire({
          title: 'Request Sended!',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000
        });

        setTimeout(() => {
          window.location.href = '/';
        }, 2500);
      }
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
                  Become An Organizer 
                </h3>
              </div>
            </div>

            <TextInputComp 
              name='name'
              label='Name / Company *'
              placeholder="Organizer's Name"
              type=''
              register={register}
            />


            <div className="w-full px-3 mb-6">
                <label 
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
                >
                    Phone Number * </label>
                <NumberInput 
                enableStepper={false} 
                placeholder="Organizer's Phone"
                {...register('phone', {required: true})}
                 />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Description *
              </label>
              <Textarea 
              placeholder="Organizer's Description"
              {...register('cover_letter', {required: true})}
              />
            </div>

            <TextInputComp 
              name='location'
              label='Location *'
              placeholder="Location"
              type=''
              register={register}
            />

            <TextInputComp 
              name='email'
              label='Email *'
              placeholder="********@*****.***"
              type='email'
              register={register}
            />

            <TextInputComp 
              name='linkedin'
              label='LinkedIn'
              placeholder="Url"
              type='url'
              register={register}
            />
            <TextInputComp 
              name='instagram'
              label='Instagram'
              placeholder="Url"
              type='url'
              register={register}
            />
            <TextInputComp 
              name='other'
              label='Other'
              placeholder="Url"
              type='url'
              register={register}
            />

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Types of Event Realized * 
              </label>
              <Controller
                name="eventTypes"
                control={control}
                render={({ field }) => (
                  <MultiSelect
                    placeholder='Select Types of Event'
                    onChange={(selectedOptions) => field.onChange(selectedOptions)}
                    value={field.value}
                  >
                    {categoryData && categoryData.map((category) => (
                      <MultiSelectItem
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </MultiSelectItem>
                    ))}
                  </MultiSelect>
                )}
              />
            </div>

            <div className="w-full px-3 mb-6">
              
              <label className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"> Profile Photo * </label>
              <input className="appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white"  
              type="file" 
              accept='image/*'
              {...register('profile_photo', {required: true})}
              />

            </div>

            <div className='w-full px-3 mb-6'>
              <label htmlFor="fileInput" className="appearance-none block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2">Upload Curriculum </label>
              <input
                type="file"
                {...register('curriculum', {required: true})}
                accept=".pdf"
                className='appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white'
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
