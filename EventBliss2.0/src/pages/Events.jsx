
export function Events() {
    const eventos = [
        { tipo: "Weddings", nombre: "Mariel Gonzales", fecha: "10 de mayo de 2024", imagen: "https://phantom-telva.unidadeditorial.es/83452b8964678322f2e0b97775d457be/resize/828/f/jpg/assets/multimedia/imagenes/2021/05/15/16211079297264.jpg" },
        { tipo: "Weddings", nombre: "Mariel Gonzales", fecha: "15 de junio de 2024", imagen: "imagen-boda2.jpg" },
        { tipo: "Weddings", nombre: "Mariel Gonzales", fecha: "20 de agosto de 2024", imagen: "imagen-boda3.jpg" },
        { tipo: "Birthday", nombre: "Manuel Paula", fecha: "5 de abril de 2024", imagen: "https://www.etapainfantil.com/wp-content/uploads/2020/02/fiesta-cumpleanos-infantil-ostentosa-700x463.jpg.webp" },
        { tipo: "Birthday", nombre: "Cumpleaños 2", fecha: "12 de julio de 2024", imagen: "imagen-cumple2.jpg" },
        { tipo: "Anniversary", nombre: "Luis Mendoza", fecha: "18 de septiembre de 2024", imagen: "https://fiestascoquetas.com/blog/wp-content/uploads/2015/02/IMG_1965.jpg" },
    ];

    const filterEvents = (tipo) => {
        return eventos.filter((evento) => evento.tipo === tipo);
      };
    

  return (
    <div className="bg-[#E6E5E4]">
        <div className="w-full md:w-auto p-16 bg-gray-800 ">
            <h2 className="text-5xl md:text-center w-full mt-6  font-bold text-white">Get to know our <span className="text-[#FD8B11]">events</span></h2>
        </div>
        
        <div className="container mx-auto max-w-2xl pt-8 lg:max-w-7xl ">
            <h2 className="text-5xl w-full m-6 font-bold text-black">Weddings</h2>
        </div>
        <div className="container mx-auto py-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filterEvents("Weddings").map((evento, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden group relative shadow-md">
                    <img src={evento.imagen} alt={evento.nombre} className="w-full h-60 object-cover object-center" />
                    <div className="absolute h-full w-full bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                        <h3 className="text-xl text-[#FD8B11] font-semibold mb-2">{evento.nombre}</h3>
                        <p className="text-[#E6E5E4] text-sm">{evento.fecha}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="container mx-auto max-w-2xl pt-8 lg:max-w-7xl ">
            <h2 className="text-5xl w-full m-6 font-bold text-black">Birthdays</h2>
        </div>
        <div className="container mx-auto py-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filterEvents("Birthday").map((evento, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden group relative shadow-md">
                    <img src={evento.imagen} alt={evento.nombre} className="w-full h-60 object-cover object-center" />
                    <div className="absolute h-full w-full bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                        <h3 className="text-xl text-[#FD8B11] font-semibold mb-2">{evento.nombre}</h3>
                        <p className="text-[#E6E5E4] text-sm">{evento.fecha}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="container mx-auto max-w-2xl pt-8 lg:max-w-7xl ">
            <h2 className="text-5xl w-full m-6 font-bold text-black">Anniversarys</h2>
        </div>
        <div className="container mx-auto py-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filterEvents("Anniversary").map((evento, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden group relative shadow-md">
                    <img src={evento.imagen} alt={evento.nombre} className="w-full h-60 object-cover object-center" />
                    <div className="absolute h-full w-full bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                        <h3 className="text-xl text-[#FD8B11] font-semibold mb-2">{evento.nombre}</h3>
                        <p className="text-[#E6E5E4] text-sm">{evento.fecha}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}


