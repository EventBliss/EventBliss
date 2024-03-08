import { useState, useEffect } from "react";
import { Slide } from "../components/Slide";

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
              <h2 className="text-2xl mb-4 text-[#FD8B11] font-bold">¿Qué somos para ti?</h2>
              <p className="text-base mb-4 text-[#3B3B3B] ">
                En Eventi Bills, no simplemente planificamos eventos, creamos momentos inolvidables que reflejan tu visión única. Nuestro equipo de expertos se dedica a entender tus deseos y transformarlos en una realidad cautivadora.
              </p>
              <p className="text-base mb-4 text-[#3B3B3B] ">
                Con nosotros, no solo obtienes un servicio de planificación de eventos; obtienes un compañero dedicado que se preocupa por cada aspecto de tu celebración. Desde bodas mágicas hasta eventos corporativos impecables, estamos aquí para hacer que cada momento sea especial.
              </p>
              <p className="text-base text-[#3B3B3B] ">
                Opta por la excelencia, elige Eventi Bills. Tu historia merece ser contada con elegancia y perfección. ¡Permítenos ser parte de tu próximo gran evento y descubre la diferencia que marcamos en cada celebración!
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
              <label htmlFor="tab1" className={`text-[23px] text-[#3B3B3B] cursor-pointer w-full flex justify-center mx-10 ${validation ? 'border-b-[3px] border-[#FD8B11]' : 'border-b-[3px] border-gray-500'} transition-colors duration-300 hover:border-[#FD8B11]`}>Cliente</label>
            </div>
            <div className="w-full flex justify-center">
              <input type="radio" id="tab2" className="sr-only" name="tab-group" checked={!validation} onChange={()=> Validation()}/>
              <label htmlFor="tab2" className={`text-[23px] text-[#3B3B3B] cursor-pointer w-full flex justify-center mx-10 ${!validation ? ' border-b-[3px] border-[#FD8B11]' : 'border-b-[3px]  border-gray-500'} transition-colors duration-500 hover:border-[#FD8B11]`}>Organizador</label>
            </div>
          </div>

          {/* segmento 1 - (nuestros servicios lado del cliente) */}

          <div id="content1" className={`tab-content ${validation ? 'block' : 'hidden'}`}>
        
            <div className="flex justify-center">
              <div className={`text-center items-center justify-center max-w-[800px] transition-all duration-1000 ease-in-out transform ${
              isVisible(650, 2000) ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }` }>
                <h3 className="text-[25px] xl:text-[30px] font-bold text-[#FD8B11] mt-[70px]">Nuestros servicios</h3>
                <h1 className=" text-[35px] xl:text-[57px] font-bold text-[#3B3B3B]">PARA EL CLIENTE</h1>
                <p className="text-[#3B3B3B] mb-10">Descubre nuestra amplia selección de servicios especializados. Desde la planificación hasta la ejecución, estamos aquí para hacer de tu evento una experiencia memorable.</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
              <div className={`grid grid-cols-2 xl:grid-cols-4 px-4 py-6 transition-all duration-1000 ease-in-out transform ${
              isVisible(900, 2000) ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }`}>

                <div className="w-auto h-auto bg-[#FD8B11] ">
                  <h2 className="text-white text-lg font-semibold p-4">Gestión de Eventos</h2>
                  <p className="text-white p-4">Permitir a los usuarios crear, publicar y administrar eventos de manera eficiente, incluyendo la gestión de invitados, fechas, ubicaciones y detalles del evento.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede]">
                  <h2 className="text-gray-800 text-lg font-semibold p-4">Registro de Participantes</h2>
                  <p className="text-gray-800 p-4">Facilitar el registro de participantes para eventos, con opciones para personalizar formularios de registro y recopilar información relevante de los asistentes.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className=" text-lg font-semibold p-4">Venta de Entradas</h2>
                  <p className=" p-4">Integrar un sistema de venta de entradas en línea, que permita a los organizadores vender boletos para sus eventos y a los usuarios comprarlos de manera conveniente.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className=" text-lg font-semibold p-4">Promoción de Eventos</h2>
                  <p className="p-4">Proporcionar herramientas de promoción y marketing para ayudar a los organizadores a difundir sus eventos, incluyendo la integración con redes sociales y campañas de correo electrónico.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className="text-lg font-semibold p-4">Gestión de Asistentes</h2>
                  <p className="p-4">Facilitar la comunicación y la interacción entre organizadores y asistentes, permitiendo a los usuarios enviar notificaciones, actualizaciones y recordatorios a los participantes del evento.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className="text-lg font-semibold p-4">Personalización de Eventos</h2>
                  <p className="p-4">Ofrecer opciones de personalización para que los organizadores puedan adaptar sus eventos según sus necesidades y preferencias, como la selección de temas, diseños y configuraciones.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede]">
                  <h2 className="text-gray-800 text-lg font-semibold p-4">Seguimiento de Eventos</h2>
                  <p className="text-gray-800 p-4">Proporcionar herramientas de seguimiento y análisis para que los organizadores puedan evaluar el rendimiento de sus eventos, incluyendo datos sobre la asistencia, la participación y el compromiso de los asistentes.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11]">
                  <h2 className="text-white text-lg font-semibold p-4">Soporte Técnico</h2>
                  <p className="text-white p-4">Ofrecer soporte técnico y asistencia continua para ayudar a los usuarios a resolver problemas y responder preguntas relacionadas con el uso de la plataforma.</p>
                </div>
                
              </div>
            </div>

          </div>

          {/* segmento 2 - (nuestros servicios lado del organizador) */}

          <div id="content2" className={`tab-content ${!validation ? 'block': 'hidden'}`}>
            
          <div className="flex justify-center">
              <div className="text-center items-center justify-center max-w-[800px]">
                <h3 className="text-[25px] xl:text-[30px] font-bold text-[#FD8B11] mt-[70px]">Nuestros servicios</h3>
                <h1 className=" text-[35px] xl:text-[57px] font-bold text-[#3B3B3B]">PARA EL ORGANIZADOR</h1>
                <p className="text-[#3B3B3B] mb-10">Descubre nuestra amplia selección de servicios especializados. Desde la planificación hasta la ejecución, estamos aquí para hacer de tu evento una experiencia memorable.</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
              <div className="grid grid-cols-2 xl:grid-cols-4 px-4 py-6">

                <div className="w-auto h-auto bg-[#FD8B11] ">
                  <h2 className="text-white text-lg font-semibold p-4">Gestión de Eventos</h2>
                  <p className="text-white p-4">Permitir a los usuarios crear, publicar y administrar eventos de manera eficiente, incluyendo la gestión de invitados, fechas, ubicaciones y detalles del evento.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede]">
                  <h2 className="text-gray-800 text-lg font-semibold p-4">Registro de Participantes</h2>
                  <p className="text-gray-800 p-4">Facilitar el registro de participantes para eventos, con opciones para personalizar formularios de registro y recopilar información relevante de los asistentes.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className=" text-lg font-semibold p-4">Venta de Entradas</h2>
                  <p className=" p-4">Integrar un sistema de venta de entradas en línea, que permita a los organizadores vender boletos para sus eventos y a los usuarios comprarlos de manera conveniente.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className=" text-lg font-semibold p-4">Promoción de Eventos</h2>
                  <p className="p-4">Proporcionar herramientas de promoción y marketing para ayudar a los organizadores a difundir sus eventos, incluyendo la integración con redes sociales y campañas de correo electrónico.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11] text-gray-100 xl:bg-[#dfdede] xl:text-gray-800">
                  <h2 className="text-lg font-semibold p-4">Gestión de Asistentes</h2>
                  <p className="p-4">Facilitar la comunicación y la interacción entre organizadores y asistentes, permitiendo a los usuarios enviar notificaciones, actualizaciones y recordatorios a los participantes del evento.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede] text-gray-800  xl:bg-[#FD8B11] xl:text-white">
                  <h2 className="text-lg font-semibold p-4">Personalización de Eventos</h2>
                  <p className="p-4">Ofrecer opciones de personalización para que los organizadores puedan adaptar sus eventos según sus necesidades y preferencias, como la selección de temas, diseños y configuraciones.</p>
                </div>

                <div className="w-auto h-auto bg-[#dfdede]">
                  <h2 className="text-gray-800 text-lg font-semibold p-4">Seguimiento de Eventos</h2>
                  <p className="text-gray-800 p-4">Proporcionar herramientas de seguimiento y análisis para que los organizadores puedan evaluar el rendimiento de sus eventos, incluyendo datos sobre la asistencia, la participación y el compromiso de los asistentes.</p>
                </div>

                <div className="w-auto h-auto bg-[#FD8B11]">
                  <h2 className="text-white text-lg font-semibold p-4">Soporte Técnico</h2>
                  <p className="text-white p-4">Ofrecer soporte técnico y asistencia continua para ayudar a los usuarios a resolver problemas y responder preguntas relacionadas con el uso de la plataforma.</p>
                </div>
                
              </div>
            </div>

          </div>

      </div>




      </div>
    </div>
  );
}
