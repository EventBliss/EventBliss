import { TableRequestsProducts } from "../components/TableRequestProducts"
import { TableRequestsCustom } from "../components/TableRequestCustom"

export function TableRequestA() {
  return (
    <div className="bg-white rounded">
        <TableRequestsProducts status={"Approved"}/>
        <TableRequestsCustom status={"Approved"}/>
    </div>
  )
}
