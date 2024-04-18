/* eslint-disable react/no-unknown-property */
import { useForm, Controller } from "react-hook-form";
import { InputData } from "./components/InputData";
import { EventData } from "./components/eventData";
import { format } from "@formkit/tempo"
import { ConditionsTerms } from "./components/ConditionsTerms";
import { useUser } from "@clerk/clerk-react";
import { CreateCustomEvent } from "../../../components/api/customEvents/post";
import { useListClients } from "../../../components/api/client";
import { useListOrganizers } from "../../../components/api/organizer/get";
import { useState } from "react";
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
export function CustomizableRequestForm({ orgEmail }) {
  const { handleSubmit, register, control, setValue,reset } = useForm();
  const {data:organizers} = useListOrganizers()
  const {data:clients} = useListClients()
  const [, setShowAlert] = useState(false);

  const organizer = organizers && organizers.filter((organizer => organizer.email == orgEmail))

  const user = useUser()

  function onSubmit(data) {
    console.log(data)
    const clientEmail = user.user.emailAddresses[0].emailAddress;
    CreateCustomEvent(data,orgEmail,clientEmail,clients,organizers)
    reset()
    setShowAlert(true);  
    Swal.fire({
      title: 'Request Sended!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    });
    setTimeout(() => {
      window.location.href = '/organizers';
    }, 2500);
  }
  const handleDatePickerChange = (date) => {
    const fechaDate = new Date(date);
    const formattedDate = format(fechaDate, "YYYY-MM-DD");
    setValue("date", formattedDate);
  };

  return (
    <div className="lg:px-0 w-full  items-center  flex justify-center">
      <div className="w-full lg:max-w-[1000px] py-5 bg-white rounded-md relative z-50">
        <h1 className="text-center text-4xl uppercase font-semibold text-orange-500 mb-10">
          Create a Custom Event
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[650px] ">
          <div className="">

            {/* Datos personales del cliente */}
            <InputData register={register}/>

            {/* Datos de los detalles del evento */}
            <EventData register={register} control={control} handleDate={handleDatePickerChange} Controller={Controller} organizer={organizer}/>

            {/* Condiciones y terminos del evento */}
            <ConditionsTerms/>

            <button
              type="submit"
              className="flex mx-auto items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
