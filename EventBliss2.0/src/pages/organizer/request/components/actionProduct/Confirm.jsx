import { useState } from "react";
import { queryClient } from "../../../../../query";
import { Button, Dialog, DialogPanel } from '@tremor/react';

export function Confirm({ APIFunction, id, name, className, queryKey, status }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleYesClick = () => {
    try {
      APIFunction(id, status)
        .then(() => {

          setIsOpen(false)
          
          queryClient.invalidateQueries({
            queryKey: [queryKey],
          });
        })
        .catch((error) => {
          console.error("Error al eliminar la solicitud:", error);
        });
    } catch (error) {
      console.log("se produjo un error al actualizar los datos", error);
      throw error;
    }
  };

  
    return (
      <div className="flex justify-center">

        <button className={className} onClick={() => setIsOpen(true)}>
          {name}
        </button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="z-[100]">
          <DialogPanel className="max-w-[500px] max-h-auto xl:max-w-[600px] xl:max-h-[600px]">
                <Button
                variant="light"
                className="mx-auto"
                onClick={() => setIsOpen(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
                </Button>
            <div className="overflow-auto scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track">
              <div className="max-w-[500px] max-h-[340px] xl:max-h-[500px] mx-10 mt-5">
                <div>
                    <h2 className="text-center text-3xl font-bold text-black">
                        Are you sure you want to {name}?
                    </h2>
                </div>
                <div className="flex justify-evenly align-center mt-8 text-white">
                    <Button variant="primary" color="red" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl">No</span>
                    </Button>
                    <Button variant="primary" color="green" onClick={handleYesClick}>
                    <span className="text-2xl">Yes</span>
                    </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    );
}
  

