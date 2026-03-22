import eu from "../assets/img/eu.svg"


export function Quemeusou() {
    return(
        <section className="grid  h-full justify-items-center grid-rows-[auto_auto]">
            <img src={eu} className="grid rounded-[100%] w-[clamp(13rem,20vw,35rem)] lg:mb-[40px] self-center justify-self-center shadow-[0_0_25px_#323232] animate-subir border-solid border-[2px] border-[#8080808a]"/>
            <section className="grid h-full w-full items-center justify-items-center">
                <h1 className="text-white font-[inter] text-[clamp(2.2rem,3vw,6rem)] font-medium">Guilherme Cava</h1>
                <p id="sobre" className="text-[#ABABAB] font-[header] text-[clamp(2.2rem,2.9vw,6rem)]">Sou um Desenvolvedor</p><p className="text-[#ABABAB] font-[pixel] text-[clamp(2.2rem,2.8vw,6rem)]  animate-cursor pr-[5px] ">Front-End</p>
            </section>
        </section>
    )
}