import { useEffect, useState } from "react";
import { useForm,Controller } from 'react-hook-form';
import { useUser } from "@clerk/clerk-react";
import ImageUploader from 'react-image-upload';
import 'react-image-upload/dist/index.css';
import Swal from 'sweetalert2';
import { CreateEvent } from "../components/api/event/post";
import { TextInputComp } from "../components/TextInput";
import {MultiSelect,MultiSelectItem,Textarea,Select,SelectItem} from '@tremor/react'
import { useListCategory } from "../components/api/category/get";
import { useListOrganizers } from "../components/api/organizer/get";
import { useListEvents } from "../components/api/event/get";
import { updateTask } from "../components/api/event/put";
import {useParams} from 'react-router-dom'

export function FormsEvent() {
  const { user } = useUser();
  const {register,handleSubmit,setValue,reset,control} = useForm();
  const [, setShowAlert] = useState(false);
  const {data:categoryData} = useListCategory()
  const {data: organizerData} = useListOrganizers()
  const {data:eventData} = useListEvents();
  const params = useParams()

  const getImageFileObject = (e) => {
    if(typeof(e) == 'string'){
      fetch(e)
      .then(response => response.blob())
      .then(blob => {
      const extension = e.split('.').pop().toLowerCase();
      const name = e.split('/').pop().toLowerCase();
      const file = new File([blob], `${name}`, { type: `image/${extension}` });
      setValue('image', file);
    })
    }else{
      setValue('image', e.file)
    }
  };

  const alert = (msg) => {
    reset()
    setShowAlert(true);  
    Swal.fire({
      title: `Event ${msg}!`,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    });
    setTimeout(() => {
      window.location.href = '/';
    }, 2500);
  }
  
  useEffect(() => {
    if(params.id){
      const event = eventData && eventData.filter(event => event.id == params.id)
      if(event){
        setValue('description', event[0].description);
        setValue("name", event[0].name);
        setValue("package", event[0].package == true ? 'Yes' : 'No');
        setValue("price", event[0].price);
        setValue('category', event[0].category)
        getImageFileObject(event[0].image)
      }
    }
  },[params.id,event])

  const onSubmit =  async (data) => {
    const email = user.emailAddresses[0].emailAddress;
    if(params.id){
      updateTask(params.id,data,organizerData,email)
      alert('Updated')
    }else{
      CreateEvent(data, organizerData ,email);
      alert('Created')
    }
  };

  return (
    <div className="relative">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2020/09/18/21/13/wedding-photography-5582980_1280.jpg")',
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
                  {params.id?
                  `Update Your Event`
                  :
                  'Create an Event'
                  }
                </h3>
              </div>
            </div>
            <TextInputComp 
              name='name'
              label='Name *'
              placeholder="Event Name"
              type=''
              register={register}
            />

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="package"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Can be reserved? *
              </label>

              <Controller
                name="package"
                control={control}
                render={({ field }) => (
                  <Select
                    onChange={(selectedOptions) => field.onChange(selectedOptions)}
                    value={field.value}
                  >
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </Select>
                )}
              />
            </div>

            <TextInputComp 
              name='price'
              label='Event Price *'
              placeholder="Price"
              type='Number'
              register={register}
            />

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Event Types * 
              </label>
              <Controller
                name="category" 
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

            <div className="w-full px-3 mb-10">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Description *
              </label>
              <Textarea
              placeholder="Event's Description"
              rows={10}
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
              onFileAdded={(e) => getImageFileObject(e)}
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                { params.id ?
                 'Update'
                 :
                 'Create'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}