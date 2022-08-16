import Chart from "react-google-charts";
import { dataCalendar, optionsCalendar } from "../data/fakeData";

export default function GraphCalendar() {
    return (
        <div className="
        flex flex-col bg-white p-2 m-1 items-center justify-center rounded-md shadow-lg xl:w-3/5 h-auto
        w-5/6
        ">
            <Chart
                chartType="Calendar"
                width="100%"
                height="200px"
                data={dataCalendar}
                options={optionsCalendar}
            />
        </div>

    )
}