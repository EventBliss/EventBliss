/* eslint-disable react/prop-types */
import {
  DatePicker,
  Select,
  SelectItem,
  Textarea,
  NumberInput
} from "@tremor/react";
import { TextInputComp } from "../../../../components/TextInput";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function EventData({ register, control, handleDate, Controller,organizer }) {
  const [day, setDay] = useState();
  const {category_names} = organizer[0]
  console.log(category_names)
  useEffect(() => {
    const date = new Date();
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDay(tomorrow);
  }, []);

  return (
    <div>
      {/* lugar del evento */}
        <TextInputComp
        label={"Location *"}
        name={"location"}
        placeholder={"location"}
        register={register}
      />
      <div style={{'width': '50%','display': "flex"}}>
        {/* dia del evento */}
        <div>
          <label className="block text-sm text-gray-700 font-bold mb-2">
            Event day
          </label>
          <DatePicker
            minDate={day}
            required
            onValueChange={handleDate}
            {...register("date",{required: true})}
          />
        </div>


        {/* Hora de inicio de evento*/}

        <TextInputComp
          label={"Start time *"}
          name={"start_time"}
          placeholder={"Start time"}
          register={register}
          type={'time'}
          
        />

        {/* Hora de finalizacion del evento*/}

        <TextInputComp
          label={"End time *"}
          name={"end_time"}
          placeholder={"End time"}
          register={register}
          type={'time'}
        />
      </div>


      {/* tipo de evento */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Type event
        </label>
        <Controller
          name="eventType"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              {category_names && category_names.map((category,index) => (
                <SelectItem value={index + 1} key={index}>
                  {category}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>


      {/* cantidad de personas que asistiran */}
      <div className="w-full px-3 mb-6 mt-4">
          <label
            className="block text-sm text-gray-700 font-bold mb-2" 
          >
          Amount of people *
          </label>
          <NumberInput 
          className="mx-auto max-w-sm" 
          min={1}
          {...register("amount_people", { required: true })} 
          />
        </div>

      {/* descripcion del evento */}
      
      <div className="w-full px-3 mb-6 mt-4">
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Description
        </label>
        <Textarea placeholder="Type here..." className="mx-auto max-w-xs" {...register("description", { required: true })}/>
      </div>

      <div className="w-full px-3 mb-6 mt-4">
          <label
            className="block text-sm text-gray-700 font-bold mb-2"
          >
          Stimated Price *
          </label>
          <NumberInput 
          className="mx-auto max-w-sm" 
          min={1}
          {...register("stimated_price", { required: true })} 
          />
        </div>
    </div>
  );
}
