import { useState, useEffect } from "react";
import { Slide } from "./Slide";

export function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textHeight, setTextHeight] = useState(0);

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

  return (
    <div>
      <div>
        <Slide />
      </div>
      <div className="bg-[#E6E5E4]">
        <div className="container mx-auto flex flex-wrap items-center justify-center py-8">
          <div
            className={`w-full md:w-1/2 px-4 order-1 md:order-none mb-4 md:mb-0 transition-all duration-1000 ease-in-out transform py-10 ${
              isVisible(-1, 988) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
              isVisible(-1, 988) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
        <div className="flex justify-center">
            <div className="text-center items-center justify-center max-w-[800px]">
              <h3 className="text-[25px] xl:text-[30px] font-bold text-[#FD8B11] mt-[70px]">Lo que hacemos</h3>
              <h1 className=" text-[35px] xl:text-[57px] font-bold text-[#3B3B3B]">NUESTROS SERVICIOS</h1>
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

        {/* <div className="relative bg-gradient-to-l from-amber-500 to-amber-300 items-center">
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-[35px] xl:text-[30px] font-bold text-[#3B3B3B] mt-[70px]">Lo que hacemos</h3>
              <h1 className=" text-[35px] xl:text-[57px] font-bold text-[#FFF7F1]">NUESTROS SERVICIOS</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 px-5 py-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-[#3B3B3B] place-items-start">

            <div className={`card w-full bg-[#FFF7F1] shadow-lg transition-all duration-1000 ease-in-out transform ${
              isVisible(500, 1400) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
              </div>
            </div>

            <div className={`card bg-[#FFF7F1] shadow-lg transition-all duration-1000 ease-in-out transform ${
            isVisible(600, 1400) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`} style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>
                  sadfasdfa
                </p>
              </div>
            </div>


            <div className={`card w-full bg-[#FFF7F1] shadow-lg transition-all duration-1000 ease-in-out transform ${
              isVisible(700,1400) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
              </div>
            </div>

          </div> 
        </div>*/}
      </div>
    </div>
  );
}
