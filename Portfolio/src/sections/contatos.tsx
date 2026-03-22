import { Window } from "../components/window"
import { Comunication } from "../components/comunication"
import { Map } from "../components/map"

export function Contatos() {
    return (
        <section id="contato" className="grid lg:grid-cols-[1fr_1fr] gap-x-[clamp(1rem,2.5vw,4.1rem)] mx-[5%] h-auto gap-y-[clamp(1rem,1.5vw,3rem)] lg:grid-rows-[auto_auto_auto]">
            <h1 className="text-white font-[inter] text-[clamp(2.5rem,3vw,5.5rem)] font-medium text-center lg:col-span-2  mb-[3%]">Contatos</h1>
            < Window />
            < Comunication />
            < Map />
        </section>
    )
}
