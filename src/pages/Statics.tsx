import Devices from "../components/devices";
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
                flex items-center m-2 xl:w-3/5 xl:flex-row xl:h-2/5
                flex-col-reverse w-full
                ">
                <GraphCircles />
                <Devices />
            </div>
        </div>
    )
}