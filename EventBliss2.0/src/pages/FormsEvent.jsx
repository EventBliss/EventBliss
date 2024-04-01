import React, { useState } from 'react';
import { Slide } from "../components/Slide";
import { UploadImage } from "../components/UploadImage";
import { TypeEvent } from '../components/TypeEvent';

export function FormsEvent() {
    const [nombreEvento, setNombreEvento] = useState('');
    const [descripcionEvento, setDescripcionEvento] = useState('');
    const [fechaHora, setFechaHora] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [tipoEvento, setTipoEvento] = useState('');
    const [imagenReferencia, setImagenReferencia] = useState('');
    const [numeroParticipantes, setNumeroParticipantes] = useState('');
    const [precio, setPrecio] = useState('');
    const [informacionOrganizador, setInformacionOrganizador] = useState('');

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setImagenReferencia(file.name);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites con ellos
    };
  
    return (
      <div className="bg-[#E6E5E4]">
      <div className="max-w-screen-lg mx-auto py-28">

        <form onSubmit={handleSubmit} className="md:col-span-8 p-10 bg-white rounded-md shadow-lg space-y-4">
          <div className='text-center'>
            <h3 className='block uppercase text-3xl font-bold dark:text-[#FD8B11]'>Create an Event</h3>
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="nombreEvento" className="block text-sm font-medium text-gray-700 font-bold mb-2">Name *</label>
            <input type="text" id="nombreEvento" className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={nombreEvento} onChange={(e) => setNombreEvento(e.target.value)} required />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="descripcionEvento" className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea id="descripcionEvento" rows="4" className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={descripcionEvento} onChange={(e) => setDescripcionEvento(e.target.value)} required />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="fechaHora" className="block text-sm font-medium text-gray-700">Date & Time *</label>
            <input type="datetime-local" id="fechaHora" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={fechaHora} onChange={(e) => setFechaHora(e.target.value)} required />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">Ubication *</label>
            <input type="text" id="ubicacion" className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} required />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-700">Event type *</label>
            <TypeEvent/>
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label htmlFor="imagenReferencia" className="block text-sm font-medium text-gray-700">Event Image Example</label>
          <UploadImage onChange={handleImagenChange} />
          <span className="block text-xs text-gray-500">{imagenReferencia}</span>
        </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="numeroParticipantes" className="block text-sm font-medium text-gray-700">Number of participants *</label>
            <input type="number" id="numeroParticipantes" className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={numeroParticipantes} onChange={(e) => setNumeroParticipantes(e.target.value)} required />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Price *</label>
            <input type="number" id="precio" className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
          </div>

          <div className="text-center">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">
              Create Event
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  };
  


