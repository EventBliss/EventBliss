import { Button, Dialog, DialogPanel } from "@tremor/react";
import { useState } from "react";
import "../assets/css/Modal.css";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ModalComponents({ name, className, date }) {
  const { isSignedIn } = useUser()
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex justify-center">
      {isSignedIn ? (
        <div>
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
                  {date}
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className={className}>{name}</button>
          </Link>
        </div>
      )}
    </div>
  );
}
