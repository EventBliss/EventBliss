import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TableRequestsProducts } from "../components/TableRequestProducts"

export function TableRequestD() {
  return (
    <div className="bg-white rounded">
        <TableRequestsProducts status={"Denied"}/>
        <TableRequestsCustom status={"Denied"}/>
        
    </div>
  )
}
