import CardIncident from "../components/cardIncident";
import Devices from "../components/devices";
import GraphCalendar from "../components/graphCalendar";
import GraphCircles from "../components/graphCircles";
import GraphLine from "../components/graphLine";

export default function Statics() {
    return(
        <div className="
            flex flex-col items-center p-2 xl:mt-20 w-full h-full
            mt-14
            ">
            <div className="flex justify-center m-2 w-full xl:h-2/5 ">
                <GraphLine />
            </div>
            <div className="
                flex items-center xl:m-2 xl:w-3/5 xl:flex-row xl:h-2/5
                flex-col-reverse w-full mt-2
                ">
                <GraphCircles />
                <Devices />
            </div>
            <div className="flex justify-center m-2 w-full xl:h-2/5 ">
                <GraphCalendar />
            </div>
            <div className="flex flex-col items-center justify-center mt-10 w-full xl:h-2/5 ">
                <h2 className="flex text-2xl font-extralight text-left">
                    Últimos incidentes
                </h2>
                <CardIncident />
                <CardIncident />
            </div>
        </div>
    )
}