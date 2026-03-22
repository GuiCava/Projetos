import gitHub from "../assets/img/github-svgrepo-com.svg"


export function GitHub() {
    return (
        <a href="https://github.com/GuiCava/Projetos" target="_blank" className="group">
            <div className="flex bg-gray-900 rounded-full w-[clamp(15rem,22vw,25rem)] items-center justify-items-center lg:hover:bg-gray-950 transition-colors duration-300 ease-in-out py-[clamp(0.8rem,0.6vw,1rem)] ">
                <img src={gitHub} className="grid w-max max-w-[clamp(2.2rem,5.5vw,4.5rem)] ml-[clamp(1rem,1.2vw,2rem)]"/>
                <h3 className="text-white font-[header] text-[clamp(1.4rem,1.8vw,2.1rem)] px-[clamp(1rem,1.2vw,2rem)]">Repositório GitHub</h3>
            </div>

            <div className="absolute ml-[clamp(2rem,3.5vw,4.5rem)] mt-8 bg-gray-900 text-white font-[header] text-[clamp(1rem,1.2vw,1.4rem)] rounded px-3 py-1 opacity-0 pointer-events-none transition-opacity duration-300 lg:group-hover:opacity-100">
                Clique para ver mais projetos!
            </div>
        </a>
    )
}