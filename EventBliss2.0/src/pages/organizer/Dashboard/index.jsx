import { useOrganizerData } from "../../../components/api/organizer/get";
import { GraphCard } from "./components/GraphCard";
import { TopCard } from "./components/TopCard";

export function Dashboard(){
    const data = useOrganizerData()
    return(
        <div>
            <div className="TopCard">
                <TopCard data={data}/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="GraphCard">
                    <GraphCard dataLY={data[0].pastYearRequest} dataAY={data[0].currentYearRequest}/>
                </div>
            </div>
        </div>
    )
}