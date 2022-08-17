import { RocketLaunch } from "phosphor-react";

export default function Footer() {
    return (
        <footer className="flex flex-row relative w-full bg-purple-900 mt-8 justify-center items-center p-5 h-auto">
            <span className="flex-row text-sm font-light text-white cursor-pointer">
                Copyright © 2022 Ícaro Sperandio. Visit my <a className="cursor-crosshair hover:text-purple-500" href="https://github.com/K0slov" target={"_blank"}>Github</a> <RocketLaunch className="inline"/> 
            </span>
        </footer>
    )
}