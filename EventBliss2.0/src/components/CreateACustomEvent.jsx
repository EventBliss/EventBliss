
const handleButtonClick = () => {
   
    if (window.confirm('Are you sure?')) {
        
        console.log('Continue');
    } else {
       
        console.log('Cancel');
    }
};

export const FormDesign = () =>{
    return (
        <div className="px-4 lg:px-0 w-full  items-center  flex justify-center">
        <div className="w-full lg:max-w-[1000px] py-5 bg-white rounded-md relative z-50">
            <h1 className="text-center text-4xl uppercase font-semibold text-orange-500">
                Create a Custom Event
            </h1>

            <div className="w-full px-10 flex justify-center">
                <div className="flex flex-col">
                    <div className="grid-cols-1 grid lg:grid-cols-2 mt-10 lg:gap-10">
                        <div className="space-y-2">
                            <p className="text-black font-semibold">Event Name *</p>
                            <input className="w-[400px]  rounded-md border-2 border-gray-300 " type="text" readOnly />

                            <p className="text-black font-semibold">Description *</p>
                            <textarea className="w-[400px] h-[80px] min-h-[80px] max-h-[150px] rounded-md border-gray-300" name="" id="" ></textarea>

                            <p className="text-black font-semibold">Email *</p>
                            <input className="w-[400px] rounded-md border-2 border-gray-300 " type="text" placeholder="Ej: ElvaGinon20@gmail.com" />
                        
                            <p className="text-black font-semibold">Event Type *</p>
                            <input
                            className="w-[400px] rounded-md border-2 border-gray-300 "
                            list="letterOptions"
                            id="letters"
                            name="letters"
                            placeholder="Select the Event Type..."
                            />
                            <datalist id="letterOptions">
                                <option value="Wedding" />
                                <option value="Birthday" />
                                <option value="BabyShower" />
                                <option value="Prom" />
                                <option value="Revelation Gender" />
                            </datalist>
                            
                           
                        </div>

                        <div className="space-y-2">
                            <p className="text-black font-semibold">Organizer *</p>
                            <input className="w-[400px]  rounded-md border-2 border-gray-300 " type="text" readOnly/>

                            <p className="text-black font-semibold" >
                            Event Date *
                            </p>
                            <input className="w-[400px] rounded-md border-2 border-gray-300" type="date" id="start" name="trip-start" value="2024-04-10" min="2024-04-10" max="2040-04-10" /> 

                            <p className="text-black font-semibold" >
                                Start Time *
                            </p>

                            <input
                                type="time"
                                className="w-[400px] rounded-md border-2 border-gray-300 "/>

                                <p className="text-black font-semibold" >
                                Ending Time *
                            </p>

                            <input
                                type="time"
                                className="w-[400px] rounded-md border-2 border-gray-300 "/>

                           
                           

                           
                        </div>
                        
                    </div>
                        <div className="w-full flex justify-center mt-5">
                            <button onClick={handleButtonClick} className="bg-orange-500 text-lg flex justify-center items-center rounded-md font-semibold text-white p-4 max-w-[150px] h-[50px] max-h-[50px] ">Create</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
            )
        }