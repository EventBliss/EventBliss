import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListEvents } from "../../components/api/event/get";
import { Button } from "@tremor/react";

export function ProductCardsModal() {
  const { id } = useParams();
  const parsedID = parseInt(id);
  const events = ListEvents();
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    if (events) {
      console.log(typeof parsedID);
      console.log(events);
      const event = events.find((event) => event.id === parsedID);
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [events, parsedID]);

  if (!selectedEvent) {
    // Si el evento no se ha encontrado, puedes mostrar un mensaje de error o redirigir a una página de error
    console.log("no se encuentra");
  }

  return (
    <div className="flex bg-red-200 justify-center items-center w-full">
      <div className="w-[800px] h-auto">
        <div className=" ">
          <div className="">
            <Button color="red" variant="light" className="pb-4">
              Close
            </Button>
          </div>
          <div>
            <img src={selectedEvent.image} alt={selectedEvent.name} />
            <h2 className="text-2xl text-black text-left font-bold py-2 font-sans">
              {selectedEvent.name}
            </h2>
            <h2 className="text-[#FD8B11] font-semibold py-2">
              Organizer:{" "}
              <span className="text-black">{selectedEvent.organizer_name}</span>
            </h2>
            <h3 className="text-[#FD8B11] font-semibold py-2">Description:</h3>
            <p className="text-black">{selectedEvent.description}</p>
            <p className="text-red-600 text-sm pt-4">
              *The indicated price is approximate and may vary depending on the
              number of guests and other specific characteristics.
            </p>
            <h3 className="text-[#FD8B11] font-semibold ">
              Estimated price:{" "}
              <span className="text-black font-normal">
                ${selectedEvent.price} USD
              </span>
            </h3>
          </div>

          <Button
            color="orange"
            className="mx-auto flex items-center mt-4 text-xl"
          >
            <span className="text-xl">Book now</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
