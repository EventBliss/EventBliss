import { updateEventRequest } from "../../../../../components/api/request/put"
import { Confirm } from "./Confirm"
// importas la funcion de la api que quieras llamar 
export function Actions({id, status, queryKey}) {

    const showNoneOption = status === "Finished" || status === "Denied"
    const showFinishedoption = status === "Approved"

  return (
    <div>
        {!showNoneOption && !showFinishedoption &&(
            <div className="flex justify-evenly">
                <div>
                    <Confirm name={"Denied"} className={"grid mx-auto py-2 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded-lg"}  id={id} APIFunction={updateEventRequest} status={'Denied'} queryKey={queryKey}></Confirm>
                </div>
                <div>
                    <Confirm name={"Approved"} className={"grid mx-auto py-2 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded-lg"}  id={id} APIFunction={updateEventRequest} status={'Approved'} queryKey={queryKey}></Confirm>
                </div>   
             </div>
        )}

        {showNoneOption && (
            <div>None</div>
        )}

        {showFinishedoption &&(
            <div>
                <Confirm name={"Finished"} className={"grid mx-auto py-2 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded-lg"}  id={id} APIFunction={updateEventRequest} status={'Finished'} queryKey={queryKey}></Confirm>
            </div>
        )}
        
    </div>
    
    
  )
}
