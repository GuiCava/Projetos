import back from "../assets/img/back.svg"
import backBlack from "../assets/img/backBlack.svg"
import coding from "../assets/gifs/Coding.gif"
import notes from "../assets/img/notes.svg"

export function Window() {
    return (
        <section className="grid grid-rows-[auto_auto_auto] grid-cols-[auto_1fr] rounded-[4px] bg-[#333] h-auto w-[clamp(21rem,32vw,40rem)] px-[3px] pb-[3px] items-center justify-self-center lg:justify-self-end lg:row-span-2">
            <h1 className="text-[#eee] font-[monospace]  font-light text-[clamp(1.1rem,1.1vw,2.1rem)] sobre self-center ml-[5px]">...</h1>
            <section className="grid col-start-2  justify-self-end gap-x-[20px] pr-[5px] items-center">
                <img src={back} className="w-[clamp(1.4rem,1.2vw,2.2rem)]"/>
            </section>
            <section className="bg-[#1A1A1A] grid col-span-2 justify-items-center">
                <img src={coding} className="w-[clamp(15rem,20vw,22rem)] mt-[10px] mb-[10px]"/>
            </section>
            <section className="bg-[#1A1A1A] grid col-span-2 justify-items-center">
                <section className="grid grid-rows-[auto_auto]">
                    <section className="grid grid-rows-[auto_auto_auto] grid-cols-[auto_1fr] rounded-[6px] bg-[#E8E8E8] h-auto mx-[5%] w-auto  pb-[10px] items-center justify-self-center">
                        <img src={notes} className="w-[19px] self-center"/>
                        <section className="grid col-start-2  justify-self-end gap-x-[20px] pr-[5px] items-center">
                            <img src={backBlack} className="w-[20px]"/>
                        </section>
                        <section className="bg-white grid col-span-2 justify-items-center h-full px-[20px] pt-[20px]">
                            <p className="text-[clamp(0.8rem,0.9vw,1.2rem)] sobre">
                            Estou a disposição de qualquer um, seja para dúvidas, parcerias, novas oportunidades e etc. Entre em contato por qualquer um dos meios a <span id="projetos" className="animate-blinkCursor">seguir.</span>
                            </p>  
                        </section> 
                    </section>
                </section>
            </section>
        </section>
    )
} 
