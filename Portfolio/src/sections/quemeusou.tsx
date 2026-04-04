import eu from "../assets/img/eu.svg"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function Quemeusou() {
    useEffect(() => {
        ScrollReveal().reveal('#Eu', {
            duration: 1000,
        });
        ScrollReveal().reveal('#name', {
            duration: 1000,
            delay: 500,
            origin: 'left',
            distance: '30%'
        });
        ScrollReveal().reveal('#sobre', {
            duration: 1000,
            delay: 1000,
            origin: 'right',
            distance: '30%'
        });
        ScrollReveal().reveal('#frontend', {
            duration: 1000,
            delay: 1500,
            origin: 'left',
            distance: '50%'
        });
    }, []);
    return(
        <section className="grid  h-full justify-items-center grid-rows-[auto_auto]">
            <img src={eu} className="grid rounded-[100%] w-[clamp(13rem,20vw,35rem)] lg:mb-[40px] self-center justify-self-center shadow-[0_0_25px_#323232] animate-subir border-solid border-[2px] border-[#8080808a] load-hidden" id="Eu"/>
            <section className="grid h-full w-full items-center justify-items-center">
                <h1 className="text-white font-[inter] text-[clamp(2.2rem,3vw,6rem)] font-medium load-hidden" id="name">Guilherme Cava</h1>
                <p id="sobre" className="text-[#ABABAB] font-[header] text-[clamp(2.2rem,2.9vw,6rem)] load-hidden">Sou um Desenvolvedor</p>
                <p className="text-[#ABABAB] font-[pixel] text-[clamp(2.2rem,2.8vw,6rem)]  animate-cursor pr-[5px] load-hidden" id="frontend">Front-End</p>
            </section>
        </section>
    )
}