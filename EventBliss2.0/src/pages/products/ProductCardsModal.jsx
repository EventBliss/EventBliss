import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useListEvents } from "../../components/api/event/get";
import { Button } from "@tremor/react";

export function ProductCardsModal() {
  const { id } = useParams();
  const parsedID = parseInt(id);
  const {data} = useListEvents()
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
     { data && data
      const event = data.find((event) => event.id === parsedID);
      setSelectedEvent(event);
    }
  }, [data, parsedID]);

  if (!selectedEvent) {
    // Si el evento no se ha encontrado, puedes mostrar un mensaje de error o redirigir a una página de error
    console.log("no se encuentra");
  }

  return (

    <div className="bg-[#E6E5E4] px-6 py-12 text-center md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-gray-800  mt-8 rounded-lg">
      <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="w-full bg-red-200 h-full lg:mb-0">
          <img src={selectedEvent.image} alt={selectedEvent.name}
            className="w-full object-cover h-full rounded-lg shadow-lg dark:shadow-black/20"  />
        </div>
        <div className="mt-12 lg:mt-0 text-white p-4">
          <h1 className="mt-2 mb-2 text-3xl font-bold tracking-tight text-white md:text-6xl xl:text-5xl">
          {selectedEvent.name}
          </h1>
          <h2 className="font-semibold py-2">
              Organizer:{" "}
              <span className="italic">{selectedEvent.organizer_name}</span>
            </h2>
            <h3 className=" font-semibold py-2">Description:</h3>
            <p className="">{selectedEvent.description}</p>
            <p className="text-red-600 text-sm pt-4">
              *The indicated price is approximate and may vary depending on the
              number of guests and other specific characteristics.
            </p>
            <h3 className=" font-semibold ">
              Estimated price:{" "}
              <span className=" font-normal">
                ${selectedEvent.price} USD
              </span>
            </h3>
        </div>
        
      </div>
    </div>
  </div>

    // <div className="flex bg-[#E6E5E4] h-full">
    //   <div className="w-full">
    //     <div className="">
    //         <Button color="red" variant="light" className="pb-4">
    //           Close
    //         </Button>
    //       </div>
    //     <div className="card lg:card-side bg-base-100 shadow-xl m-6">
    //       <img className="lg:h-[600px] w-[500px]" src={selectedEvent.image} alt={selectedEvent.name} />
    //       <div className="card-body content-fit">
            
    //         <h2 className="text-2xl text-black text-left font-bold py-2 font-sans card-title">
    //           {selectedEvent.name}
    //         </h2>
    //         <h2 className="text-[#FD8B11] font-semibold py-2">
    //           Organizer:{" "}
    //           <span className="text-black">{selectedEvent.organizer_name}</span>
    //         </h2>
    //         <h3 className="text-[#FD8B11] font-semibold py-2">Description:</h3>
    //         <p className="text-black">{selectedEvent.description}</p>
    //         <p className="text-red-600 text-sm pt-4">
    //           *The indicated price is approximate and may vary depending on the
    //           number of guests and other specific characteristics.
    //         </p>
    //         <h3 className="text-[#FD8B11] font-semibold ">
    //           Estimated price:{" "}
    //           <span className="text-black font-normal">
    //             ${selectedEvent.price} USD
    //           </span>
    //         </h3>
    //         <Button
    //         color="orange"
    //         className="card-actions justify-end"
    //         >
    //           <span className="text-xl">Book now</span>
    //         </Button>
    //       </div>

          
    //     </div>
    //   </div>
    // </div>
  );
}
