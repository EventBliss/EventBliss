import { TabsComponents } from "../../../../components/TabsComponents"
import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TableRequestsProducts } from "../components/TableRequestProducts"

export function TableRequestD() {
  return (
    <div className="bg-white rounded">
      <TabsComponents
      TitleA={'Requests products denied'}
      TitleB={'Requests of custom event denied'}
      PanelA={<TableRequestsProducts status={"Denied"}/>}
      PanelB={<TableRequestsCustom status={"Denied"}/>}/>
        
        
    </div>
  )
}
