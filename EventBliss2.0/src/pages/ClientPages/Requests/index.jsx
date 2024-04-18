import { TableRequestsCustom } from "./components/TableRequestsCustom"
import { TableRequestsProducts } from "./components/TableRequestsProducts"
import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

export  function Requests() {
  const { isSignedIn } = useUser()
  const navigate = useNavigate()

  if(!isSignedIn){
    navigate("/")
  }

  return (
    <div className="bg-white">
        <div>
            <TableRequestsProducts></TableRequestsProducts>
            <TableRequestsCustom/>
        </div>
    </div>
  )
}
