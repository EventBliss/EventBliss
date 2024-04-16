import {
  DatePicker,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Textarea,
} from "@tremor/react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function EventData({ register, control, handleDate, Controller, typeEvent }) {
  const [day, setDay] = useState();

  useEffect(() => {
    const date = new Date();
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDay(tomorrow);
  }, []);

  return (
    <div>
      {/* dia del evento */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Event day
        </label>
        <DatePicker
          control={control}
          minDate={day}
          required
          onValueChange={handleDate}
        />
      </div>

      {/* lugar del evento */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Place of the event
        </label>
        <TextInput
          type={"location"}
          control={control}
          placeholder={"e.g., City, State"}
          required
          {...register("location", { required: true })}
        />
      </div>

      {/* Hora de inicio de evento*/}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Start time
        </label>
        <TextInput
          type={"time"}
          control={control}
          required
          {...register("start_time", { required: true })}
        />
      </div>

      {/* Hora de finalizacion del evento*/}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          End time
        </label>
        <TextInput
          type={"time"}
          control={control}
          required
          {...register("end_time", { required: true })}
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
          defaultValue="1" // Valor por defecto del select
          render={({ field }) => (
            <Select {...field}>
              {typeEvent && typeEvent?.map((item, index)=>(
                <SelectItem value={item} key={index}>{item}</SelectItem>
              ))}
            </Select>
          )}
        />
      </div>

      {/* cantidad de personas que asistiran */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Amount of people
        </label>
        <NumberInput
          placeholder={"e.g., 10"}
          className="mx-auto max-w-sm"
          {...register("amount_people", { required: true })}
        />
      </div>

      {/* descripcion del evento */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Amount of people
        </label>
        <Textarea placeholder="Type here..." className="mx-auto max-w-xs" {...register("description_event", { required: true })}/>
      </div>
    </div>
  );
}
