import { TabsComponents } from "../../../../components/TabsComponents"
import { TableRequestsCustom } from "../components/TableRequestCustom"
import { TableRequestsProducts } from "../components/TableRequestProducts"

export function TableRequestF() {
  return (
    <div>
      <TabsComponents
      TitleA={'Requests products finished'}
      TitleB={'Requests of custom event finished'}
      PanelA={<TableRequestsProducts status={"Finished"}/>}
      PanelB={<TableRequestsCustom status={"Finished"}/>}
      />
    </div>
  )
}
