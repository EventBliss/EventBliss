
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useListEvents } from "../../components/api/event/get";


export function ProductCardsView() {
  const { id } = useParams();
  const parsedID = parseInt(id);
  const { data } = useListEvents();
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    if (data) {
      const event = data.find((event) => event.id === parsedID);
      setSelectedEvent(event);
    }
  }, [data, parsedID]);

  if (!selectedEvent) {
    // Si el evento no se ha encontrado, puedes mostrar un mensaje de error o redirigir a una página de error
    console.log("no se encuentra");
  }

  return (
    <div className="bg-[#E6E5E4] px-6 py-12 text-center md:px-12 lg:text-left relative">
      <Link to='/Products'>
        <button
          className="absolute top-[80px] left-4 bg-zinc-100 lg:left-12 text-black w-32 p-2 flex items-center justify-center rounded-lg shadow hover:bg-zinc-400 focus:shadow-outline focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <span className="text-xl pl-2 font-bold">Back</span>
          
        </button>
      </Link>
      <div className="w-100 mx-auto mt-[50px] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-gray-800 mt-8 rounded-lg">
        <div className="grid items-center gap-2 lg:gap-2 text-lg lg:grid-cols-2">
          <div className="w-full h-full lg:mb-0">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="w-full object-cover h-full rounded-lg shadow-lg dark:shadow-black/20"
            />
          </div>
          <div className="lg:mt-0 text-white p-10">
            <h1 className=" mb-2 text-3xl font-bold tracking-tight text-white md:text-6xl xl:text-5xl">
              {selectedEvent.name}
            </h1>
            <h2 className="font-semibold text-2xl md:text-4xl text-[#FD8B11] py-2 italic">
              {selectedEvent.organizer_name}
            </h2>
            <p className="">{selectedEvent.description}</p>

            <p className="text-orange-400 font-semibold text-sm pt-4">
              *The indicated price is approximate and may vary depending on the
              number of guests and other specific characteristics.
            </p>
            <p className="text-center py-4">
              <span className="text-5xl font-bold tracking-tight text-neutral-300">
                ${selectedEvent.price}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-400">
                USD
              </span>
            </p>

            
              <button className="grid mx-auto py-4 shadow bg-[#FD8B11] hover:bg-[#fd8311c2] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-lg">
                <span className="text-xl">Book now</span>
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
