import { ModalComponents } from "../../../../components/Modal";
import { Confirm } from "./Confirm";

export function Actions({ status, id, deleteRequest }) {
  
  const showCancelButton = status === "In progress" || status === "Denied";

  return (
    <div>
      {showCancelButton && (
        <Confirm name={"Cancel"} className={"grid mx-auto py-2 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded-lg"}  id={id} deleteRequest={deleteRequest}></Confirm>
      )}

      {!showCancelButton && (
        <h3>None</h3>
      )}
    </div>
  );
}
