/* eslint-disable react/no-unknown-property */
import { useForm, Controller } from "react-hook-form";
import { TextInputComp } from "../../../components/TextInput";
import { DatePicker, TextInput } from "@tremor/react";
import { InputData } from "./components/InputData";
import { EventData } from "./components/eventData";
import { format } from "@formkit/tempo"
import { ConditionsTerms } from "./components/ConditionsTerms";


export function CustomizableRequestForm({ typeEvent }) {
  const { handleSubmit, register, control, setValue } = useForm();

  const tiposEventos = ["Cumpleaños", "Boda", "Conferencia", "Concierto", "Festival"];

  async function onSubmit(data) {
    console.log(data);
  }
  const handleDatePickerChange = (date) => {
    const fechaDate = new Date(date);
    const formattedDate = format(fechaDate, "YYYY-MM-DD HH:mm:ss");
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
            <InputData register={register} control={control}/>

            {/* Datos de los detalles del evento */}
            <EventData register={register} control={control} handleDate={handleDatePickerChange} Controller={Controller} typeEvent={tiposEventos}/>

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
