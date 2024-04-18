import { TabsComponents } from "../../../components/TabsComponents"
import { TableRequestsCustom } from "./components/TableRequestsCustom"
import { TableRequestsProducts } from "./components/TableRequestsProducts"
import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

export  function Requests() {
  const { isSignedIn } = useUser()
  const navigate = useNavigate()

  if(!isSignedIn){
    navigate("/")
  }

  return (
    <div className="pt-20 p-10 bg-white">
        <div>
          <TabsComponents
          TitleA={'requests products'}
          TitleB={'requests of custom events'}
          PanelA={<TableRequestsProducts/>}
          PanelB={<TableRequestsCustom/>}/>
            
            
        </div>
    </div>
  )
}
