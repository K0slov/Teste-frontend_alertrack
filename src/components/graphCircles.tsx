import Chart from "react-google-charts";
import { dataServices, optionsServices } from "../data/fakeData";

export default function GraphCircles() {
    return (
        <div className="
            flex flex-col items-center justify-around rounded-md  p-2 bg-white shadow-lg box-content xl:m-1 xl:w-2/4 xl:h-80 
            w-4/5 h-auto mt-6
            ">
            <div className="
                flex w-full xl:h-5/6
                h-auto
                ">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="250px"
                    data={dataServices}
                    options={optionsServices}
                />
            </div>
        </div>
    )
}