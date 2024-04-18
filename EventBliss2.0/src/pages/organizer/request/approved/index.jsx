import { TableRequestsProducts } from "../components/TableRequestProducts"
import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TabsComponents } from "../../../../components/TabsComponents"

export function TableRequestA() {
  return (
    <div className="bg-white rounded">
      <TabsComponents
      TitleA={'Approved requests'}
      TitleB={'Approved custom event requests'}
      PanelA={<TableRequestsProducts status={"Approved"}/>}
      PanelB={<TableRequestsCustom status={"Approved"}/>}/>
        
        
    </div>
  )
}
