import {
  Card,
  TabGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { Graph } from "./Graph";

// eslint-disable-next-line react/prop-types
export function GraphCard({ dataLY, dataAY }) {
  if (!dataAY || !dataLY) return null;
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear()

  return (
    <div>
      <Card className="h-[420px]">
        <TabGroup>
          <TabList>
            <Tab>{añoActual}</Tab>
            <Tab>{añoActual-1}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div>
                {dataAY && (
                  <Graph
                    data={dataAY}
                    title="Average Requests Made This Year"></Graph>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {dataLY && (
                  <Graph
                    data={dataLY}
                    title="Average Requests Made Last Year"></Graph>
                )}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}
