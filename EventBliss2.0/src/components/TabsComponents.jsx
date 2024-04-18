import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";

// eslint-disable-next-line react/prop-types
export function TabsComponents({ TitleA, TitleB, PanelA, PanelB }) {
  return (
    <div>
      <Card>
        <TabGroup>
          <TabList className="mt-4">
            <Tab>{TitleA}</Tab>
            <Tab>{TitleB}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{PanelA}</TabPanel>
            <TabPanel>{PanelB}</TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}
