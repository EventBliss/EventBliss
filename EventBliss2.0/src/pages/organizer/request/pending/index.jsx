import { TableRequestsProducts } from "../components/TableRequestProducts"
import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TabsComponents } from "../../../../components/TabsComponents"

export function TableRequestIP() {
  return (
    <div className="bg-white rounded">
      <TabsComponents 
      TitleA={'Request products'} 
      TitleB={'Request of custom events'} 
      PanelA={<TableRequestsProducts status={"In progress"}/>}
      PanelB={<TableRequestsCustom status={"In progress"}/>}/>
    </div>
  )
}
