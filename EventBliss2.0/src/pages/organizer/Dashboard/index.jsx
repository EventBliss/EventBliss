import { Card } from "@tremor/react";
import { RequestsGraph } from "./components/RequestsGraph";

export function Dashboard(){
    return(
        <div className="">
            <div className="bg-white w-full h-full absolute inset-0"></div>
            <Card className="mx-auto mb-10">
                <RequestsGraph/>
            </Card>
        </div>
    )
}