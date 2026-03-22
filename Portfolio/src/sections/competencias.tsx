import { Html5 } from "../components/html5"
import { Css3 } from "../components/css3"
import { Js } from "../components/js"
import { React } from "../components/react"
import { Node } from "../components/node"
import { Sql } from "../components/sql"
import { Tailwind } from "../components/tailwind"
import { Bootstrap } from "../components/bootstrap"
import { GitHub } from "../components/git"
import { Figma } from "../components/figma"

export function Competencias() {
    return (
        <section id="competencias" className="grid justify-items-center items-center border-solid border-[4px] border-[#8080808a] border-x-0  gap-y-[clamp(3rem,4vw,5rem)] content-center bg-white/10 bg-cover h-min py-10 self-center lg:mt-20">
            <h1 className="text-white font-[inter] text-[clamp(2.5rem,3vw,5.5rem)] font-medium mt-10">Competências</h1>
            <section className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] items-center justify-items-center gap-[clamp(0.5rem,2vw,1.5rem)] mb-10">
                < Html5 />
                < Css3 />
                < Js />
                < React />
                < Node />
                < Sql />
                < Tailwind />
                < Bootstrap />
                < GitHub />
                < Figma />
            </section>
        </section>
    )
}