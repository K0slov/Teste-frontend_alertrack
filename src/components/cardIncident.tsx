import { CheckCircle, Eye, WarningCircle } from "phosphor-react";

export default function CardIncident() {
    return (
        <div  className="
        flex flex-col bg-white p-2 m-1 items-center justify-center rounded-md shadow-lg xl:w-3/5 xl:h-1/6
        w-5/6
        ">
            <div className="flex w-full border-none p-4">
                <h2 className="font-bold text-lg" >
                    02 de Agosto 2022
                </h2>
            </div>
            <div className="flex flex-row items-center shadow-sm w-11/12 h-auto">
                <div className="flex justify-center items-center mr-8">
                    <CheckCircle className="inline text-green-600" size={32} />
                </div>
                <div className="flex flex-col justify-start shadow-sm w-11/12 h-auto p-4">
                    <h3 className="text-lg font-bold fon">
                        Solução
                    </h3>
                    <p className="text-sm font-normal">
                        Aqui vem uma descrição completamente detalhada de todo o procedimento realizado para solucionar o problema.
                    </p>
                    <span className="text-xs font-extralight underline">
                        02/08/2022
                    </span>
                </div>
            </div>
            
            <div className="flex flex-row items-center shadow-sm w-11/12 h-auto">
                <div className="flex justify-center items-center mr-8">
                    <Eye className="inline text-blue-600" size={32} />
                </div>
                <div className="flex flex-col justify-start shadow-sm w-11/12 h-auto p-4">
                    <h3 className="text-lg font-bold fon">
                        Problema sendo monitorado
                    </h3>
                    <p className="text-sm font-normal">
                        Aqui vem uma observação do funcionario referente o que esta sendo feito.
                    </p>
                    <span className="text-xs font-extralight underline">
                        01/08/2022
                    </span>
                </div>
            </div>
            
            <div className="flex flex-row items-center shadow-sm w-11/12 h-auto">
                <div className="flex justify-center items-center mr-8">
                    <WarningCircle className="inline text-yellow-600" size={32} />
                </div>
                <div className="flex flex-col justify-start shadow-sm w-11/12 h-auto p-4">
                    <h3 className="text-lg text-left font-bold fon">
                        Problema reportado
                    </h3>
                    <p className="text-sm text-left font-normal">
                        Aqui vem a descrição do cliente com detalhes referente ao problema ocasionado.
                    </p>
                    <span className="text-xs text-left font-extralight underline">
                        01/08/2022
                    </span>
                </div>
            </div>
        </div>
    )
}