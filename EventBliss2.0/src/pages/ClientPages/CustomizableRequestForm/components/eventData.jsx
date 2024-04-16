/* eslint-disable react/prop-types */
import {
  DatePicker,
  Select,
  SelectItem,
  Textarea,
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
      <TextInputComp
        label={"Amount of people *"}
        name={"amount_people"}
        placeholder={"Amount of people"}
        register={register}
        type={'number'}
      />

      {/* descripcion del evento */}
      
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Description
        </label>
        <Textarea placeholder="Type here..." className="mx-auto max-w-xs" {...register("description", { required: true })}/>
      </div>
      <TextInputComp
        label={"Stimated Price *"}
        name={"stimated_price"}
        placeholder={"How much can you pay? US$"}
        register={register}
        type={'number'}
      />
    </div>
  );
}
