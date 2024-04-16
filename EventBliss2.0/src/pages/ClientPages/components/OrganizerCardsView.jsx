import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useListCategory } from "../../../components/api/category/get";
import { useListOrganizers } from "../../../components/api/organizer/get";
import { useUser } from "@clerk/clerk-react";

export function OrganizerCardsView() {
  const { isSignedIn, user } = useUser()
  const { id } = useParams();
  const parsedID = parseInt(id);
  const { data: organizerData } = useListOrganizers();
  const [selectedOrganizer, setSelectedOrganizer] = useState({});
  const { data: categoryData } = useListCategory();
  const [organizerCategories, setOrganizerCategories] = useState([]);
  const [path, setPath] = useState("")

  useEffect(() => {
    if (organizerData) {
      const organizer = organizerData.find(
        (organizer) => organizer.id === parsedID
      );
      setSelectedOrganizer(organizer);
    }
  }, [organizerData, parsedID]);

  useEffect(() => {
    if (categoryData && selectedOrganizer.event_types) {
      // Filtrar las categorías para obtener solo las correspondientes a los IDs de event_types
      const filteredCategories = categoryData.filter((category) => {
        return selectedOrganizer.event_types.includes(category.id);
      });
      setOrganizerCategories(filteredCategories);
    }
  }, [categoryData, selectedOrganizer.event_types]);

  if (!selectedOrganizer) {
    console.log("No se encontró el organizador");
  }

  useEffect(() => {
    if(isSignedIn && user){
      setPath('/CustomizableRequestForm')
    } else {
      setPath("/login")
    }
  }, [isSignedIn, user]);
  

  return (
    <div className=" px-6 py-12 text-center md:px-12 lg:text-left relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
                backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_1280.jpg")',
            }}></div>

      <Link to="/Organizers">
        <button className="absolute z-20 top-[80px] left-4 bg-zinc-100 lg:left-12 text-black w-32 p-2 flex items-center justify-center rounded-lg shadow hover:bg-zinc-400 focus:shadow-outline focus:outline-none">
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
      {/* Contenido del organizador */}
      <div className="relative w-100 mx-auto mt-[50px] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-gray-800 mt-8 rounded-lg">
        <div className="grid items-center gap-2 lg:gap-2 text-lg lg:grid-cols-2">
          {/* Imagen del organizador */}
          <div className="w-full h-full lg:mb-0">
            <img
              src={selectedOrganizer.profile_photo}
              alt={selectedOrganizer.name}
              className="w-full object-cover h-full rounded-lg shadow-lg dark:shadow-black/20"
            />
          </div>
          {/* Información del organizador */}
          <div className="lg:mt-0 text-white p-10">
            <h1 className=" mb-2 text-3xl font-bold tracking-tight text-white md:text-6xl xl:text-5xl">
              {selectedOrganizer.name}
            </h1>
            <h2 className="font-semibold text-2xl md:text-4xl text-[#FD8B11] py-2 italic">
              {selectedOrganizer.email}
            </h2>
            <p className="text-lg">{selectedOrganizer.cover_letter}</p>
            <h3 className="text-center py-2 font-bold text-3xl tracking-tight wrap text-zinc-100 lg:text-left">
              Type of events
            </h3>
            <ul className="flex justify-center lg:justify-start flex-col md:list-disc md:list-inside">
              {organizerCategories.map((category) => (
                <li
                  key={category.id}
                  className="text-xl font-semibold hover:text-[#FD8B11] pr-2 sm:text-2xl"
                >
                  {category.name},
                </li>
              ))}
            </ul>

            {selectedOrganizer.location &&(
              <div className="flex justify-center items-center pt-4 text-xl lg:justify-start lg:text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p className="pl-2">{selectedOrganizer.location}</p>

              
            </div>
            )}   
            
            <p className="text-3xl text-center py-4 font-bold tracking-tight text-neutral-300 lg:text-2xl lg:text-left">
                +1 {selectedOrganizer.phone}
              </p>


            <div className="mt-3 flex gap-4 justify-center lg:justify-start items-center text-gray-400 pb-4">
              {selectedOrganizer.linkedin && (
                <a href={selectedOrganizer.linkedin}>
                  <svg
                    className="w-10 h-10 duration-150 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g clipPath="url(#clip0_17_68)">
                      <path
                        fill="currentColor"
                        d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_68">
                        <path fill="currentColor" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              )}

              {selectedOrganizer.instagram && (
                <a href={selectedOrganizer.instagram}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 duration-150 hover:text-gray-500"
                  >
                    <path d="M12 9.52A2.48 2.48 0 1014.48 12 2.48 2.48 0 0012 9.52zm9.93-2.45a6.53 6.53 0 00-.42-2.26 4 4 0 00-2.32-2.32 6.53 6.53 0 00-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 00-2.26.42 4 4 0 00-2.32 2.32 6.53 6.53 0 00-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 00.42 2.27 3.94 3.94 0 00.91 1.4 3.89 3.89 0 001.41.91 6.53 6.53 0 002.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 002.26-.42 3.89 3.89 0 001.41-.91 3.94 3.94 0 00.91-1.4 6.6 6.6 0 00.42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93zm-2.54 8a5.73 5.73 0 01-.39 1.8A3.86 3.86 0 0116.87 19a5.73 5.73 0 01-1.81.35H8.94A5.73 5.73 0 017.13 19a3.51 3.51 0 01-1.31-.86A3.51 3.51 0 015 16.87a5.49 5.49 0 01-.34-1.81V12 8.94A5.49 5.49 0 015 7.13a3.51 3.51 0 01.86-1.31A3.59 3.59 0 017.13 5a5.73 5.73 0 011.81-.35h6.12a5.73 5.73 0 011.81.35 3.51 3.51 0 011.31.86A3.51 3.51 0 0119 7.13a5.73 5.73 0 01.35 1.81V12c0 2.06.07 2.27.04 3.06zm-1.6-7.44a2.38 2.38 0 00-1.41-1.41A4 4 0 0015 6H9a4 4 0 00-1.38.26 2.38 2.38 0 00-1.41 1.36A4.27 4.27 0 006 9v6a4.27 4.27 0 00.26 1.38 2.38 2.38 0 001.41 1.41 4.27 4.27 0 001.33.26h6a4 4 0 001.38-.26 2.38 2.38 0 001.41-1.41 4 4 0 00.26-1.38v-3-3a3.78 3.78 0 00-.26-1.38zM12 15.82A3.81 3.81 0 018.19 12h0A3.82 3.82 0 1112 15.82zm4-6.89a.9.9 0 010-1.79h0a.9.9 0 010 1.79z"></path>
                  </svg>
                </a>
              )}

              {selectedOrganizer.other && (
                <a href={selectedOrganizer.other}>
                  <svg
                    className="w-5 h-5 duration-150 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g clipPath="url(#clip0_17_68)">
                      <path
                        fill="currentColor"
                        d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_68">
                        <path fill="currentColor" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              )}
            </div>

            <Link to={path}>
              <button className="grid mx-auto py-4 shadow bg-[#FD8B11] hover:bg-[#fd8311c2] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-lg">
                <span className="text-xl">Book now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
