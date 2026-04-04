import { CartNiver } from "../components/cartNiver"
import { CartTNR } from "../components/cartTNR"
import { CartDisc } from "../components/cartDisc"
import { GitHub } from "../components/gitHub"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export function Projetos() {
    useEffect(() => {
        ScrollReveal().reveal('.cart', {
            duration: 1000, 
            interval: 400,
        });
    }, []); 
    return (
        <section className="grid w-full items-center gap-y-[clamp(2.5rem,2vw,4rem)] justify-items-center">
            <h1 className="text-white font-[inter] text-[clamp(40px,3.1vw,4.7rem)] font-medium">Alguns Projetos</h1>
            <section className="grid lg:grid-cols-3 gap-y-[30px] gap-x-[clamp(30px,3vw,3rem)]">
                < CartNiver />
                < CartTNR />
                < CartDisc />
            </section>
            < GitHub />
        </section>
    )
}