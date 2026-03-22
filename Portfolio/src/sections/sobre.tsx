export function Sobre() {
    return(
        <section className="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] rounded-[4px] bg-[#333] h-auto px-[clamp(0.3rem,0.1vw,2rem)] pb-[clamp(0.3rem,0.1vw,2rem)] items-center justify-self-center w-max max-w-[clamp(22rem,47vw,80rem)]">
            <h1 className="text-[#eee] font-[monospace] sobre text-[clamp(1.3rem,1vw,2.7rem)] ml-[20%]">Sobre</h1>
            <div className="grid col-start-2 grid-cols-3 justify-self-end gap-x-[20px] pr-[5px] items-center">
                <div className="w-[clamp(0.8rem,0.9vw,1.8rem)] aspect-square rounded-full bg-[#e33]"></div>
                <div className="w-[clamp(0.8rem,0.9vw,1.8rem)] aspect-square rounded-full bg-[#ee0]"></div>
                <div className="w-[clamp(0.8rem,0.9vw,1.8rem)] aspect-square rounded-full bg-[#0b0]"></div>
            </div>
            <div className="text-[#0f0] text-start sobre bg-[#1A1A1A] grid col-span-2 justify-items-center p-[clamp(1rem,1vw,2rem)] text-[clamp(1rem,1.1vw,2.1rem)]">
                <p>Sou um desenvolvedor front-end, especializado na criação de interfaces modernas e responsivas. Meu foco é transformar ideias em projetos funcionais, priorizando sempre a performance e a usabilidade. Busco alinhar a estética com boas práticas de desenvolvimento, garantindo que cada projeto entregue seja visualmente agradável, funcional e eficiente. Estou em constante atualização, acompanhando as evoluções da web para oferecer soluções cada vez mais completas, profissionais e alinhadas às necessidades do usuário <span id="projetos" className="animate-blinkCursor">final</span>
                </p>
            </div>
        </section>
    )
}