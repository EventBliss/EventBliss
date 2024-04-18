/* eslint-disable react/prop-types */
import { BarChart, Card } from "@tremor/react";
import { useEffect, useState } from "react";

export function BarListCard({ dataAC, dataLY }) {
  const [value, setValue] = useState(null);
  const [chartdata, setChartData] = useState([]);
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear()

  useEffect(() => {
    const obtenerAñoActual = () => {
      const fechaActual = new Date();
      return fechaActual.getFullYear();
    };
    const añoActual = obtenerAñoActual();
    const monthMap = {January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7,September: 8, October: 9, November: 10, December: 11};
  
    const newData = Array.from({ length: 12 }, (_, index) => {
      const monthKey = Object.keys(monthMap)[index];
      const obj = {
        date: `${monthKey + ' ' + añoActual}`,
      };
  
      obj[`${añoActual - 1}`] =
        dataLY?.find((item) => item.month === monthKey)?.request;
      obj[`${añoActual}`] =
        dataAC?.find((item) => item.month === monthKey)?.request;
  
      return obj;
    });
  
    setChartData(newData);
  }, [dataLY, dataAC]);
  console.log(chartdata)
  return (
    <Card className="h-[420px]">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Closed Pull Requests
      </h3>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="date"
        categories={[añoActual-1, añoActual]}
        colors={["#FD8B11", "#957B9B"]}
        yAxisWidth={30}
        onValueChange={(v) => setValue(v)}
      />
    </Card>
  );
}
