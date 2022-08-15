import { CheckCircle } from  "phosphor-react"

export default function Header() {
    return (
        <header className="
            flex flex-col relative w-full bg-purple-900 mb-2 justify-center items-center pt-10 xl:h-1/4
            h-1/6
            ">
            <div className="
                flex xl:w-3/5
                w-4/5
                ">
                <span className="text-white uppercase text-left">
                    status alertrack
                </span>
            </div>
            <div className="
                flex flex-row relative bg-zinc-100 rounded-lg shadow-lg items-center xl:w-3/5 xl:h-28 xl:-bottom-10
                w-5/6 h-24 -bottom-10
                ">
                <div className="
                    flex bg-zinc-100 h-auto rounded-lg justify-center items-center xl:w-28 
                    w-20
                    ">
                    <div className="flex rounded-full bg-green-300 text-white">
                        <CheckCircle className="inline" size={50} />
                    </div>
                </div>
                <div className="flex flex-col h-4/6 justify-evenly">
                    <strong className="
                        xl:text-xl 
                        text-md
                        ">
                        Todo o serviço operacional
                    </strong>
                    <span className="
                        xl:text-sm
                        text-xs
                        ">
                        Último incidente 5 dias atrás
                    </span>
                </div>
            </div>
        </header>
    )
} 