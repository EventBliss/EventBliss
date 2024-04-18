import { Link } from "react-router-dom"
import { Button } from "@tremor/react"
import { deleteEvent } from "../../../../components/api/event/delete"
import { Confirm } from "../../../../components/Confirm"

export function Actions({ id }) {
  return (
    <div className="flex justify-evenly">
      <Link to={`EditEvent/${id}`}>
        <Button 
        variant="primary">
          Edit
        </Button>
      </Link>

      

      <Confirm name={'Delete'} id={id} className={"grid mx-auto py-2 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded-lg"} APIFunction={deleteEvent} queryKey={'Events'}></Confirm>


    </div>
  )
}
