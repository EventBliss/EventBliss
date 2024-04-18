import { useForm, Controller } from "react-hook-form";
import "react-image-upload/dist/index.css";
import Swal from "sweetalert2";
import {
  Textarea,
  MultiSelect,
  MultiSelectItem,
  NumberInput,
} from "@tremor/react";
import { TextInputComp } from "../components/TextInput";
import { createOrganizer } from "../components/api/organizer/post";
import { useListCategory } from "../components/api/category/get";
import { useListOrganizers } from "../components/api/organizer/get";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { useUser } from "@clerk/clerk-react";
import { updateOrganizer } from "../components/api/organizer/put";
import { useNavigate } from "react-router-dom";

export function CreateOrganizer() {
  const { handleSubmit, register, control, reset,setValue } = useForm();
  const [, setShowAlert] = useState(false);
  const { data: categoryData } = useListCategory();
  const { data: organizerData } = useListOrganizers();
  const { user } = useUser();
  const navigate = useNavigate()
  const params = useParams()
  var organizer = organizerData ? organizerData.filter((organizer) => organizer.email == user?.emailAddresses[0].emailAddress) : []

  useEffect(() => {
    if(params.id && organizer){
        setValue("name",organizer[0].name)
        setValue("phone",organizer[0].phone)
        setValue("cover_letter",organizer[0].cover_letter)
        setValue("location",organizer[0].location)
        setValue("email",organizer[0].email)
        setValue("linkedin",organizer[0].linkedin)
        setValue("instagram",organizer[0].instagram)
        setValue("other",organizer[0].other)
        setValue("eventTypes",organizer[0].event_types)
        handleFile(organizer[0].profile_photo,'profile_photo')
        handleFile(organizer[0].curriculum,'curriculum')
    }
  },[params.id,organizerData,organizer])

  const handleFile = (e,field) =>{
    if(typeof(e) == 'string'){
      fetch(e)
      .then(response => response.blob())
      .then(blob => {
      const name = e.split('/').pop().toLowerCase();
      const file = new File([blob], `${name}`, { type: "application/pdf" });
      setValue(field, file)
    })}
  }

  const alert = (icon,title,text='') => {
    setShowAlert(true);  
    Swal.fire({
      title: `Request ${title}!`,
      icon: icon,
      text: text,
      showConfirmButton: false,
      timer: 3000
    });
  }
  
  const onSubmit = async (data) => {
    const { curriculum, cover_letter, email } = data;
    if (curriculum.length === 0 || cover_letter.length === 0) {
      alert('error', 'Error', 'Please attach both curriculum and cover letter.');
    } else {
      if(params.id){
        console.log(data)
        updateOrganizer(params.id,data)
        alert('success', 'Updated');
        reset();
        setTimeout(() => {
          window.location.href = "/";
        }, 2500);

      }else{
        if (organizerData.map((organizer) => organizer.email == email)[0] == true) {
          alert('error', 'Denied', 'A user with the same email has made this request.');
        } else {
          console.log(data);
          createOrganizer(data);
          reset();
          alert('success', 'Sent');
          
          setTimeout(() => {
            navigate('/organizers')
          }, 2500);
        }
      }
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
                {params.id ? "Edit Your Profile" : "Become An Organizer"}
                  
                </h3>
              </div>
            </div>

            <TextInputComp
              name="name"
              label="Name / Company *"
              placeholder="Organizer's Name"
              type=""
              register={register}
            />

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Phone Number *{" "}
              </label>
              <NumberInput
                enableStepper={false}
                placeholder="Organizer's Phone"
                {...register("phone", { required: true })}
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="Cover Letter"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Description *
              </label>
              <Textarea
                placeholder="Organizer's Description"
                {...register("cover_letter", { required: true })}
              />
            </div>

            <TextInputComp
              name="location"
              label="Location *"
              placeholder="Location"
              type=""
              register={register}
            />


            {params.id ?
              <TextInputComp
              name="email"
              label="Email *"
              placeholder="********@*****.***"
              type="email"
              register={register}
              disabled={true} />
            :
            <TextInputComp
              name="email"
              label="Email *"
              placeholder="********@*****.***"
              type="email"
              register={register}
               />
            }
            

            <TextInputComp
              name="linkedin"
              label="LinkedIn"
              placeholder="URL"
              type="url"
              register={register}
            />
            <TextInputComp
              name="instagram"
              label="Instagram"
              placeholder="URL"
              type="url"
              register={register}
            />
            <TextInputComp
              name="other"
              label="Other Social Media"
              placeholder="URL"
              type="url"
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
                    placeholder="Select Types of Event"
                    onChange={(selectedOptions) =>
                      field.onChange(selectedOptions)
                    }
                    value={field.value}
                  >
                    {categoryData &&
                      categoryData.map((category) => (
                        <MultiSelectItem key={category.id} value={category.id}>
                          {category.name}
                        </MultiSelectItem>
                      ))}
                  </MultiSelect>
                )}
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2">
                {" "}
                Logo / Company Image *{" "}
              </label>
              {params.id ? <span>The last photo is already uploaded</span> : <></>}
              <input
                className="appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                type="file"
                accept="image/*"
                {...register("profile_photo", { required: false })}
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="fileInput"
                className="appearance-none block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Curriculum *
              </label>
              {params.id ? <span>The last CV is already uploaded</span> : <></>}
              <input
                type="file"
                {...register("curriculum", { required: false })}
                accept=".pdf"
                className="appearance-none block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {params.id ? "Save Profile" : "Send Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
