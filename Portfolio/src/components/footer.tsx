import linkedin from "../assets/img/linkedin.svg"
import instagram from "../assets/img/instagram.svg" 

export function Footer() {
    return (
        <footer className="grid h-auto p-[clamp(1rem,2vw,4.1rem)] gap-y-[clamp(1rem,1.5vw,3rem)] w-full text-[clamp(0.8rem,0.9vw,1.6rem)]">
            <p className="text-white text-center">® Copyright <b><i>Guilherme Cava</i></b> Todos os direitos reservados</p>
            <div className="flex justify-self-center gap-x-[20px] items-center">
                <a href="https://www.instagram.com/_guicava/" target="_blank" className="grid justify-self-center hover:scale-[1.05] duration-300 ease-in-out"><img src={instagram} className="w-[clamp(2.5rem,2vw,3.5rem)]"/></a>
                <a href="https://www.linkedin.com/in/guilhermecava" target="_blank" className="grid justify-self-center hover:scale-[1.05] duration-300 ease-in-out"><img src={linkedin} className="w-[clamp(2.6rem,2.3vw,3.8rem)]"/></a>
            </div>
            <p className="text-white grid justify-self-center">Designed by Guilherme Cava</p>
        </footer>
    )
}