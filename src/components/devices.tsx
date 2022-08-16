import { CheckCircle, Gear, WarningCircle } from "phosphor-react"



export default function Devices() {
    
    return (
        <div className="
        flex flex-col m-1 items-center justify-around rounded-md  p-2 bg-white shadow-lg box-content xl:w-2/4 xl:h-80 
        w-4/5 h-auto
        ">
            <div className="flex w-full mb-2" >
                <h2 className="text-left text-xl ml-4 font-bold">
                    Serviços
                </h2>
            </div>
            
            <div className="flex flex-col justify-around w-full px-4" >
                    <p className="flex justify-between items-center my-1 underline-offset-1 w-full h-auto rounded-md hover:bg-slate-100" >
                        SacDigital 
                        <div className="flex rounded-full p-1 items-center right-0 lg:hover:w-72 lg:hover:bg-green-100 lg:hover:-mr-64 lg:hover:duration-75 text-transparent lg:hover:text-black ">
                            <CheckCircle className="inline rounded-full text-white bg-green-600 mr-5 hover:animate-spin" size={30} />
                            <span className="inline -mr-24">Operando</span>
                        </div>
                    </p>

                    <p className="flex justify-between items-center my-1 underline-offset-1 w-full h-auto rounded-md hover:bg-slate-100" >
                        Panfleto Online
                        <div className="flex rounded-full p-1 items-center right-0 lg:hover:w-72 lg:hover:bg-green-100 lg:hover:-mr-64 lg:hover:duration-75 text-transparent lg:hover:text-black ">
                            <CheckCircle className="inline rounded-full text-white bg-green-600 mr-5 hover:animate-spin" size={30} />
                            <span className="inline -mr-24">Operando</span>
                        </div>
                    </p>
                    <p className="flex justify-between items-center my-1 underline-offset-1 w-full h-auto rounded-md hover:bg-slate-100" >
                        SMSideal
                        <div className="flex rounded-full p-1 items-center right-0 lg:hover:w-72 lg:hover:bg-red-200 lg:hover:-mr-64 lg:hover:duration-75 text-transparent lg:hover:text-black">
                            <Gear className="inline rounded-full text-white bg-red-600 mr-6 hover:animate-spin" size={30} />
                            <span className="inline -mr-36">em manutenção</span>
                        </div>
                    </p>
                    <p className="flex justify-between items-center my-1 underline-offset-1 w-full h-auto rounded-md hover:bg-slate-100" >
                        Consulta ideal
                        <div className="flex rounded-full p-1 items-center right-0 lg:hover:w-72 lg:hover:bg-green-100 lg:hover:-mr-64 lg:hover:duration-75 text-transparent lg:hover:text-black ">
                            <CheckCircle className="inline rounded-full text-white bg-green-600 mr-5 hover:animate-spin" size={30} />
                            <span className="inline -mr-24">Operando</span>
                        </div>
                    </p>
                    <p className="flex justify-between items-center my-1 underline-offset-1 w-full h-auto rounded-md hover:bg-slate-100" >
                        WhatsApp
                        <div className="flex rounded-full p-1 items-center right-0 lg:hover:w-72 lg:hover:bg-green-100 lg:hover:-mr-64 lg:hover:duration-75 text-transparent lg:hover:text-black ">
                            <CheckCircle className="inline rounded-full text-white bg-green-600 mr-5 hover:animate-spin" size={30} />
                            <span className="inline -mr-24">Operando</span>
                        </div>
                    </p>
                    <p className="flex justify-between items-center my-1 underline-offset-1 w-full h-auto rounded-md hover:bg-slate-100" >
                        WhatsApp Business API
                        <div className="flex rounded-full p-1 items-center right-0 lg:hover:w-72 lg:hover:bg-yellow-100 lg:hover:-mr-64 lg:hover:duration-75 text-transparent lg:hover:text-black">
                            <WarningCircle className="inline rounded-full text-white bg-yellow-600 mr-5 hover:animate-spin" size={30} />
                            <span className="inline -mr-20">Instável</span>
                        </div>
                    </p>
            </div>
        </div>
    )
}