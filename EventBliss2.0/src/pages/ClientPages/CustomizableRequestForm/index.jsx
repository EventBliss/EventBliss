/* eslint-disable react/no-unknown-property */
import { useForm, Controller } from "react-hook-form";
import { InputData } from "./components/InputData";
import { EventData } from "./components/eventData";
import { format } from "@formkit/tempo"
import { ConditionsTerms } from "./components/ConditionsTerms";
import { useUser } from "@clerk/clerk-react";
import { CreateCustomEvent } from "../../../components/api/customEvents/post";
export function CustomizableRequestForm() {
  const { handleSubmit, register, control, setValue } = useForm();
 const user = useUser()
  async function onSubmit(data) {
    
    CreateCustomEvent(data,)
    console.log(data);
  }
  const handleDatePickerChange = (date) => {
    const fechaDate = new Date(date);
    const formattedDate = format(fechaDate, "YYYY-MM-DD");
    setValue("date", formattedDate);
  };

  return (
    <div className="px-4 lg:px-0 w-full  items-center  flex justify-center">
      <div className="w-full lg:max-w-[1000px] py-5 bg-white rounded-md relative z-50">
        <h1 className="text-center text-4xl uppercase font-semibold text-orange-500 mb-10">
          Create a Custom Event
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="">

            {/* Datos personales del cliente */}
            <InputData register={register}/>

            {/* Datos de los detalles del evento */}
            <EventData register={register} control={control} handleDate={handleDatePickerChange} Controller={Controller}/>

            {/* Condiciones y terminos del evento */}
            <ConditionsTerms/>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
