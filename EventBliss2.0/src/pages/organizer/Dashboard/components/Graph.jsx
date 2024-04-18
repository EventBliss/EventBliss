import { AreaChart } from "@tremor/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function Graph({data:dataR, title}){
  const [data, setData] = useState();

  useEffect(()=>{
    const transformedData = dataR?.map((item) => ({
      month: item.month,
      request: item.request,
    }));
    setData(transformedData);
  },[dataR])
  
    const CustomTooltip = (props) => {
        const { payload } = props;
    
        return (
          <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
            {payload.map((item, idx) => (
              <div key={idx} className="flex flex-1 space-x-2.5">
                <div className={`flex w-1 flex-col bg-blue-500 rounded`} />
                <div className="space-y-1">
                  <p className="text-tremor-content">Solicitudes realizadas</p>
                  <p className="font-medium text-tremor-content-emphasis">
                    {item.value} Solicitudes
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
      };
    
      CustomTooltip.propTypes = {
        payload: PropTypes.arrayOf(
          PropTypes.shape({
            month: PropTypes.string,
            request: PropTypes.number,
          })
        ),
      };
    
      {
        data && <CustomTooltip props={data} />;
      }
      

    return (
        <div>
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {title}{" "}
          </h3>
          <div className="flex justify-center items-center">
            <AreaChart
              className="mt-4 h-72 w-3/4"
              data={data}
              index="month"
              categories={["request"]}
              colors={["blue"]}
              yAxisWidth={20}
              customTooltip={CustomTooltip}
            />
          </div>
        </div>
      );
}