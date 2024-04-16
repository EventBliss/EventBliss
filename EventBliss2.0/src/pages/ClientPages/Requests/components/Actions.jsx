import { Link } from "react-router-dom"
import { Button } from "@tremor/react"

export function Actions() {
  return (
    <div>
      <Link>
        <Button 
        variant="primary"
        color="red">
          Cancelar
        </Button>
      </Link>

    </div>
  )
}
