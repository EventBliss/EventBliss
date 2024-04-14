import { Link } from "react-router-dom"
import { Button } from "@tremor/react"

export function Actions({ id }) {
  return (
    <div>
      <Link to={`EditEvent/${id}`}>
        <Button 
        variant="primary">
          Edit
        </Button>
      </Link>

      <Link to={`EditEvent/${id}`} className="pl-2">
        <Button
        variant="primary"
        color="red"
        >
          Delete
        </Button>
      </Link>
    </div>
  )
}
