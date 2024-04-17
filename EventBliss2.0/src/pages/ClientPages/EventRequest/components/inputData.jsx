import {
    DatePicker,
    Textarea,
    TextInput
} from "@tremor/react"
import { TextInputComp } from "../../../../components/TextInput"

// eslint-disable-next-line react/prop-types
export function InputData({register,day,handleDatePickerChange,organizerName,eventName}){

    return(
    <div>
        <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
        >
            Event Name
        </label>
        <TextInput placeholder={`${eventName}`} disabled={true} />

        <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
        >
            Organizer Name
        </label>
        <TextInput placeholder={`${organizerName}`} disabled={true} />



        <TextInputComp
            label={"Location *"}
            name={"event_location"}
            placeholder={"EVent Location"}
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
                onValueChange={handleDatePickerChange}
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
        <div>
            <label className="block text-sm text-gray-700 font-bold mb-2">
            Description
            </label>
            <Textarea placeholder="Type here..." className="mx-auto max-w-xs" {...register("comment", { required: true })}/>
        </div>
        </div>
    )
}