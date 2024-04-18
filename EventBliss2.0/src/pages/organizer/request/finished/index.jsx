import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TableRequestsProducts } from "../components/TableRequestProducts"

export function TableRequestF() {
  return (
    <div className="bg-white rounded">
        <TableRequestsProducts status={"Finished"}/>
        <TableRequestsCustom status={"Finished"}/>
    </div>
  )
}
