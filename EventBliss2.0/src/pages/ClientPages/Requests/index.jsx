import { TableRequestsCustom } from "./components/TableRequestsCustom"
import { TableRequestsProducts } from "./components/TableRequestsProducts"

export  function Requests() {
  return (
    <div className="bg-white">
        <div>
            <TableRequestsProducts></TableRequestsProducts>
            <TableRequestsCustom/>
        </div>
    </div>
  )
}
