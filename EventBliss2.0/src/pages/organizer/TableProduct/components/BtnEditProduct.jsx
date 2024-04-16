import { Link } from "react-router-dom"
import { Button } from "@tremor/react"

// eslint-disable-next-line react/prop-types
export function BtnEditProduct({ id }) {
    return(
        <Link to={`EditEvent/${id}`}>
            <Button variant="primary">editar</Button>
        </Link>
    )
}