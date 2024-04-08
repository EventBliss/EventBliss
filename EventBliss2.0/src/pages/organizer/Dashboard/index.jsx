import { Card } from "@tremor/react";
import { RequestsGraph } from "./components/RequestsGraph";

export function Index(){
    return(
        <div>
            <Card className="mx-auto pt-40">
                <RequestsGraph/>
            </Card>
        </div>
    )
}