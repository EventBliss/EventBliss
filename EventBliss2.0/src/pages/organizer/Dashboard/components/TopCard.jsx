import { Card } from "@tremor/react";
import { IconBus, IconCheck, IconClockStop, IconMail } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import decoracion from "../../../../assets/images/decoracion.jpg";

export function TopCard({ data: dataTC = [] }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const transformedData = dataTC.reduce((acc, item) => {
      return {
        ...acc,
        requestNumber: item.requestNumber,
        requestInProgress: item.requestInProgress,
        requestFinished: item.requestFinished,
      };
    }, {});
    setData(transformedData);
  }, [dataTC]);

  console.log(data);

  const CardDashbord = [
    {
      id: "requestNumber",
      title: "Request",
      color: "blue",
      Icon: IconMail,
    },
    {
      id: "requestInProgress",
      title: "Request In Progress",
      color: "yellow",
      Icon: IconClockStop,
    },
    {
      id: "requestFinished",
      title: "Request Finished",
      color: "green",
      Icon: IconCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-5">
      {data &&
        Object.entries(data).map(([key, value]) => {
          const FilterCard = CardDashbord.find((item) => item.id === key);

          if (!FilterCard) return null;

          const { title, color, Icon } = FilterCard;

          return (
            <div
              key={key}
              className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out mb-5 mt-5"
              style={{
                backgroundImage: `url(${decoracion})`,
              }}>
              <div
                className={`absolute inset-0 bg-${color}-900 bg-opacity-85 transition duration-300 ease-in-out`}></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center gap-5">
                <div className="bg-white p-2 rounded-md">
                  <Icon className={`h-16 w-16 text-${color}-600`}></Icon>
                </div>
                <div>
                  <h3 className="text-center text-white text-lg">{title}</h3>
                  <h3 className="text-center text-white text-3xl mt-2 font-bold">
                    {value}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
