
import { useEffect, useState } from "react";
import { format } from "@formkit/tempo"
import { useForm } from "react-hook-form";
import { InputData } from "./components/inputData";
import Swal from 'sweetalert2';
import { CreateEventRequest } from "../../../components/api/request/post";
import { useUser } from "@clerk/clerk-react";
import { useListClients } from "../../../components/api/client";
import { useListOrganizers } from "../../../components/api/organizer/get";
import { useListRequests } from "../../../components/api/request/get";
// eslint-disable-next-line react/prop-types
export function EventRequestForm({organizerName,eventName,organizerEmail,eventId}){
    const [day, setDay] = useState();
    const [, setShowAlert] = useState(false);
    const { handleSubmit, register, setValue,reset } = useForm();
    const {data:clientData} = useListClients()
    const {data: organizerData} = useListOrganizers();
    const {data:eventRequests} = useListRequests()
    const user = useUser()

    useEffect(() => {
    setValue('eventId', eventId)
      const date = new Date();
      const tomorrow = new Date(date);
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDay(tomorrow);
    }, []);

    const handleDatePickerChange = (date) => {
        const fechaDate = new Date(date);
        const formattedDate = format(fechaDate, "YYYY-MM-DD");
        setValue("date", formattedDate);
      };

    const onSubmit = (data) => {
        const clientEmail = user.user.emailAddresses[0].emailAddress;
        const clientEvents = eventRequests.filter(eventRequest => eventRequest.client_email == clientEmail)
        var requestToday = false

        for (const event of clientEvents) {
          const eventDateWithoutTime = event.event_date.split('T')[0];
          const eventStatus = event.status

          console.log(eventDateWithoutTime)
          if (eventDateWithoutTime == data.date && eventStatus !== 'Finished' ) {
            requestToday = true
            break
          } 
        }

        if(requestToday == false){
          CreateEventRequest(organizerEmail,clientEmail, eventId,data,clientData,organizerData)
          reset()
          setShowAlert(true);  
            Swal.fire({
              title: 'Request Sended!',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout(() => {
              window.location.href = '/';
            }, 2500);
        }else{
          reset()
          setShowAlert(true);  
          Swal.fire({
            title: 'You have already requested an event for this day!',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
          });
          requestToday = false
        }

    }

    return(
        <div className="px-4 lg:px-0 w-full  items-center  flex justify-center">
        <div className="w-full lg:max-w-[1000px] py-5 bg-white rounded-md relative z-50">
          <h1 className="text-center text-4xl uppercase font-semibold text-orange-500 mb-10">
            BOOK YOUR EVENT NOW!!
          </h1>
  
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
            <InputData 
            register={register} 
            day={day} 
            handleDatePickerChange={handleDatePickerChange}
            organizerName={organizerName} 
            eventName={eventName} 
            
            />
  

            <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Book
            </button>
            </div>
          </form>
        </div>
      </div>
    )
}