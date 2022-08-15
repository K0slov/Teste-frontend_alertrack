import { Chart } from "react-google-charts";
import { data, options } from "../data/fakeData";

export default function GraphLine() {
   
    return (
        <div className="
            flex flex-col bg-white p-2 m-1 items-center justify-center rounded-md shadow-lg xl:w-3/5 xl:h-1/6
            w-5/6
            ">
            <div className="flex w-full">
                <span className="
                    text-left text-lg xl:m-3
                    m-1
                    ">
                    Whatsapp - últimas 24 horas.
                </span>
            </div>
            <div className="
                flex w-full xl:h-5/6
                h-64
                ">
               <Chart
                    chartType="Line"
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}