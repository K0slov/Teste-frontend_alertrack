import Chart from "react-google-charts";
import { dataServices, optionsServices } from "../data/fakeData";

export default function GraphCircles() {
    return (
        <div className="
            flex m-1 justify-center rounded-md p-2 bg-white shadow-lg box-content xl:w-2/4 xl:h-80 
            w-4/5 h-60
            ">
            <div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={dataServices}
                    options={optionsServices}
                />
            </div>
        </div>
    )
}