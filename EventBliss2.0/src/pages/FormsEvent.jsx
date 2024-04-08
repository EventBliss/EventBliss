import { useState } from "react";
import { UploadImage } from "../components/UploadImage";
import { TypeEvent } from "../components/TypeEvent";

export function FormsEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [participants, setParticipants] = useState("");
  const [price, setPrice] = useState("");

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImage(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites con ellos
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2020/09/18/21/13/wedding-photography-5582980_1280.jpg")',
        }}
      ></div>

      <div className="bg-[#E6E5E4]">
        <div className="max-w-screen-lg mx-auto py-28">
          <form
            onSubmit={handleSubmit}
            className="md:col-span-8 p-10 bg-white rounded-md shadow-lg space-y-4 relative z-10 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2">
              <div className="text-center">
                <h3 className="block uppercase text-3xl font-bold dark:text-[#FD8B11]">
                  Create an Event
                </h3>
              </div>
            </div>

            {/*Campo nombre del evento */}
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>



          {/* <div className="w-full px-3 mb-6">
              <label
                htmlFor="dateTime"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Date & Time *
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                className="bg-gray-200 text-gray-700 appearance-none block w-full text-sm border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                required
              />
      </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="ubication"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Ubication *
              </label>
              <input
                type="text"
                id="ubication"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={ubication}
                onChange={(e) => setUbication(e.target.value)}
                required
              />
            </div>*/}

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="tipoEvento"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Event type *
              </label>
              <TypeEvent />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                rows="3"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Event Image Example
              </label>
              <UploadImage onChange={handleImagenChange} />
              <span className="block text-xs text-gray-500">{image}</span>
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="participants"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Number of participants *
              </label>
              <input
                type="number"
                id="participants"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                required
              />
            </div>

            

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 font-bold mb-2"
              >
                Price *
              </label>
              <input
                type="number"
                id="price"
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FD8B11] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
