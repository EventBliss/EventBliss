import { useState, useEffect } from "react";
import { Slide } from "../components/Slide";
import { organizerRequests, updateEventRequest } from "../components/Api";

export function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const [validation, setValidation] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition)

  useEffect(() => {
    const textContainer = document.getElementById("text-container");
    if (textContainer) {
      const height = textContainer.offsetHeight;
      setTextHeight(height);
    }
    
  }, []);

  const isVisible = (position1, position2) => {
    return scrollPosition > position1 && scrollPosition < position2;
  };

  const Validation = () => {
    setValidation(!validation)
  }

  console.log(validation)

  const [eventRequests,requestApproved,requestInProgress,resquestDenied,requestFinished] = organizerRequests('ashley1@gmail.com')
  console.log('peticiones terminadas',requestApproved)
  return (
    <div>
      <div>
        <Slide />
      </div>
      <div className="bg-[#E6E5E4]">
        <div className="container mx-auto flex flex-wrap items-center justify-center py-8">
          <div
            className={`w-full md:w-1/2 px-4 order-1 md:order-none mb-4 md:mb-0 transition-all duration-1000 ease-in-out transform py-10 ${
              isVisible(-1, 988) ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }`}
          >
            <div className="relative w-full h-full" style={{ height: textHeight }}>
              <img
                src="https://cdn0.bodas.net/article-real-wedding/578/original/1280/jpg/4462584.jpeg"
                alt="Ejemplo"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-20 z-30 rounded-lg" />
            </div>
          </div>

          <div
            id="text-container"
            className={`w-full md:w-1/2 px-4 order-2 md:order-none transition-all duration-1000 ease-in-out transform ${
              isVisible(-1, 988) ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }`}
          >
            <div className={`animated-container bg-white rounded-lg shadow-lg overflow-hidden p-8`}>
              <h2 className="text-2xl mb-4 text-[#FD8B11] font-bold">What are we to you?</h2>
              <p className="text-base mb-4 text-[#3B3B3B] ">
                At Event Bills, we don´t simply plan events, we create unforgettable moments that reflect your unique vision. Our team of experts is dedicated to understanding your desires and transforming them into a captivating reality.
              </p>
              <p className="text-base mb-4 text-[#3B3B3B] ">
              With us, you don´t just get an event planning service; you get a dedicated companion who cares about every aspect of your celebration. From magical weddings to impeccable corporate events, we are here to make every moment special.
              </p>
              <p className="text-base text-[#3B3B3B] ">
              Opt for excellence, choose Eventi Bills. Your story deserves to be told with elegance and perfection. Let us be part of your next big event and discover the difference we make in each celebration!
              </p>
            </div>
          </div>
        </div>


        <div>
          <div className={`w-full flex items-center transition-all duration-1000 ease-in-out transform py-10 ${
              isVisible(500, 1150) ? "lg::translate-y-0 lg:opacity-100" : "lg::translate-y-10 lg:opacity-0"
            }`}>
            <div className="w-full flex justify-center">
              <input type="radio" id="tab1" className="sr-only" name="tab-group" checked={validation} onChange={()=> Validation()}/>
              <label htmlFor="tab1" className={`text-[23px] text-[#3B3B3B] cursor-pointer w-full flex justify-center mx-10 ${validation ? 'border-b-[3px] border-[#FD8B11]' : 'border-b-[3px] border-gray-500'} transition-colors duration-300 hover:border-[#FD8B11]`}>Client</label>
            </div>
            <div className="w-full flex justify-center">
              <input type="radio" id="tab2" className="sr-only" name="tab-group" checked={!validation} onChange={()=> Validation()}/>
              <label htmlFor="tab2" className={`text-[23px] text-[#3B3B3B] cursor-pointer w-full flex justify-center mx-10 ${!validation ? ' border-b-[3px] border-[#FD8B11]' : 'border-b-[3px]  border-gray-500'} transition-colors duration-500 hover:border-[#FD8B11]`}>Organizer</label>
            </div>
          </div>

          {/* segmento 1 - (nuestros servicios lado del cliente) */}

          <div id="content1" className={`tab-content ${validation ? 'block' : 'hidden'}`}>
        
            <div className="flex justify-center">
              <div className={`text-center items-center justify-center max-w-[800px] transition-all duration-1000 ease-in-out transform ${
              isVisible(650, 2000) ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }` }>
                <h3 className="text-[25px] xl:text-[30px] font-bold text-[#FD8B11] mt-[70px]">Our services</h3>
                <h1 className=" text-[35px] xl:text-[57px] font-bold text-[#3B3B3B]">FOR THE CLIENT</h1>
                <p className="text-[#3B3B3B] mb-10">Discover our wide selection of specialized services. From planning to execution, we are here to make your event a memorable experience.</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
              <div className={`grid grid-cols-2 xl:grid-cols-3 px-4 py-6 transition-all duration-1000 ease-in-out transform ${
              isVisible(900, 2000) ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }`}>

                <div className="w-auto h-auto bg-[#FD8B11] ">
                  <h2 className="text-white text-lg font-semibold p-4">Personalized Event Planning</h2>
                  <p className="text-white p-4">We offer assistance in planning and organizing personalized events according to your needs and preferences.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede]">
                  <h2 className="text-gray-800 text-lg font-semibold p-4">Venue and Supplier Selection</h2>
                  <p className="text-gray-800 p-4">We help you find and select the ideal venues and service providers for your event, such as party rooms, catering, entertainment, decoration, etc.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className=" text-lg font-semibold p-4">Guest and RSVP Management</h2>
                  <p className=" p-4">We make it easy to manage guests and RSVP, including tracking RSVPs, sending reminders, and managing guest lists.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className=" text-lg font-semibold p-4">Advice and Support</h2>
                  <p className="p-4">We provide advice and support throughout the entire planning and execution process of your event, from the selection of suppliers to the coordination of the day of the event.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className="text-lg font-semibold p-4">Photography and Videography Services</h2>
                  <p className="p-4">Provide photography and videography services to capture special party moments, ensuring clients have lasting memories of their celebration.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className="text-lg font-semibold p-4">Live Entertainment</h2>
                  <p className="p-4">Arrange live entertainment for the party, such as performances by magicians, clowns, circus performers, musicians or DJs, to keep guests entertained and create a festive atmosphere.</p>
                </div>

                
                
              </div>
            </div>

          </div>

          {/* segmento 2 - (nuestros servicios lado del organizador) */}

          <div id="content2" className={`tab-content ${!validation ? 'block': 'hidden'}`}>
            
          <div className="flex justify-center">
              <div className="text-center items-center justify-center max-w-[800px]">
                <h3 className="text-[25px] xl:text-[30px] font-bold text-[#FD8B11] mt-[70px]">Our services</h3>
                <h1 className=" text-[35px] xl:text-[57px] font-bold text-[#3B3B3B]">FOR THE ORGANIZER</h1>
                <p className="text-[#3B3B3B] mb-10">Discover our wide selection of specialized services. From planning to execution, we are here to make your event a memorable experience.</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
              <div className="grid grid-cols-2 xl:grid-cols-3 px-4 py-6">

                <div className="w-auto h-auto bg-[#FD8B11] ">
                  <h2 className="text-white text-lg font-semibold p-4">Event Management Platform</h2>
                  <p className="text-white p-4">We offer a comprehensive platform for event management, which includes tools for event creation, promotion, ticketing, and tracking.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede]">
                  <h2 className="text-gray-800 text-lg font-semibold p-4">Event Publishing and Promotion</h2>
                  <p className="text-gray-800 p-4">We allow organizers to publish and promote their events online, reaching a wider audience and increasing event visibility and attendance.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className=" text-lg font-semibold p-4">Ticket and Reservation Management</h2>
                  <p className=" p-4">We facilitate the management of tickets and reservations for events, including online ticket sales, sales tracking, and seating and capacity management.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className=" text-lg font-semibold p-4">Analytics and Reporting</h2>
                  <p className="p-4">We provide analytics and reporting tools so organizers can track the performance of their events, including data on ticket sales, attendance, and more.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className="text-lg font-semibold p-4">Technical Support and Customer Service</h2>
                  <p className="p-4">We offer technical support and customer service to help organizers with any questions or problems they may have during the event planning and execution process.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className="text-lg font-semibold p-4">Event Customization</h2>
                  <p className="p-4">We offer customization options so organizers can tailor their events to their needs and preferences, such as selecting themes, layouts, and settings.</p>
                </div>

                
              </div>
            </div>

          </div>

      </div>




      </div>
    </div>
  );
}
