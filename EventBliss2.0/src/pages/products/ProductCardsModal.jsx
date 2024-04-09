import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListEvents } from '../../components/Api';
import { Button, Dialog, DialogPanel } from '@tremor/react';

export function ProductCardsModal() {
  const { id } = useParams();
  const parsedID = parseInt(id)
  const events = ListEvents();
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    if (events) {
      console.log(typeof(parsedID))
      console.log(events)
      const event = events.find(event => event.id === parsedID);
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [events, parsedID]);

  if (!selectedEvent) {
    // Si el evento no se ha encontrado, puedes mostrar un mensaje de error o redirigir a una página de error
    console.log("no se encuentra")
  }


  const [isOpen, setIsOpen] = useState(true);


  return (
    <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100]"
      >
      <DialogPanel className="max-w-lg">
        <div className='flex justify-end'>

          <Button
                color='red'
                variant="light"
                className="pb-4"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
        </div>
        <div>
          <img src={selectedEvent.image} alt={selectedEvent.name} />
          <h2 className='text-2xl text-black text-left font-bold py-2 font-sans'>{selectedEvent.name}</h2>
          <h2 className='text-[#FD8B11] font-semibold py-2'>Organizer: <span className='text-black'>{selectedEvent.organizer_name}</span></h2>
          <h3 className='text-[#FD8B11] font-semibold py-2'>Description:</h3>
          <p className='text-black'>{selectedEvent.description}</p>
          <p className='text-red-600 text-sm pt-4'>*The indicated price is approximate and may vary depending on the number of guests and other specific characteristics.</p>
          <h3 className='text-[#FD8B11] font-semibold '>Estimated price: <span className='text-black font-normal'>${selectedEvent.price} USD</span></h3>
        </div>
        
        <Button
          color='orange'
          className='mx-auto flex items-center mt-4 text-xl'
          onClick={() => setIsOpen(false)}
        >
          <span className='text-xl'>Book now</span>
        </Button>
          
      </DialogPanel>
    </Dialog>
    
  );
}
