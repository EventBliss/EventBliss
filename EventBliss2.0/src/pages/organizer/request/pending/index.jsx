import { TableRequestsProducts } from "../components/TableRequestProducts"
import { TableRequestsCustom } from "../components/TableRequestCustom"

export function TableRequestIP() {
  return (
    <div className="bg-white rounded">
        <TableRequestsProducts status={"In progress"}/>
        <TableRequestsCustom status={"In progress"}/>
    </div>
  )
}
