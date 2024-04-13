import { Card } from "@tremor/react";
import { RequestsGraph } from "./components/RequestsGraph";
import { useOrganizerData } from "../../../components/api/organizer/get";

export function Dashboard(){
    const data = useOrganizerData('christalperez0@gmail.com')
    console.log(data)
    return(

        <div className="">
            <div className="bg-white w-full h-full absolute inset-0"></div>
            <Card className="mx-auto mb-10">
                <RequestsGraph/>
            </Card>
        </div>
    )
}