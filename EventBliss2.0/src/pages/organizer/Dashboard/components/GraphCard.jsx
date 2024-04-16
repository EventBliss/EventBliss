
import { Card } from "@tremor/react";
import { Graph } from "./Graph";

// eslint-disable-next-line react/prop-types
export function GraphCard({dataLY, dataAY}) {
    if (!dataAY || !dataLY) return null;
    
    return(
        <div>
            <div className="mb-5">
                <Card>
                    {dataAY && <Graph data={dataAY} title="Average Solicitudes Realizadas de este año"></Graph>}
                </Card>
            </div>
            <div className="mb-5">
                <Card>
                    {dataLY && <Graph data={dataLY} title="Average Solicitudes Realizadas del año pasado"></Graph>}
                </Card>
            </div>

        </div>
    )
}