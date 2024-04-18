import { TableRequestsProducts } from "../components/TableRequestProducts"
import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TabsComponents } from "../../../../components/TabsComponents"

export function TableRequestA() {
  return (
    <div className="bg-white rounded">
      <TabsComponents
      TitleA={'Requests products approved'}
      TitleB={'Requests of custom event approved'}
      PanelA={<TableRequestsProducts status={"Approved"}/>}
      PanelB={<TableRequestsCustom status={"Approved"}/>}/>
        
        
    </div>
  )
}
