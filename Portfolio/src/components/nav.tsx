import home from "../assets/img/house.svg"


export function Nav() {
    return (
        <nav className="flex justify-center items-center px-[clamp(10px,2vw,5rem)] gap-x-[clamp(3px,6vw,17rem)] border-solid border-[#8080808a] border-[clamp(2px,0.2vw,10px)] rounded-[clamp(10px,0.8vw,40px)] py-[clamp(5px,0.3vw,4rem)] bg-black text-[clamp(1rem,1.3vw,3.8rem)]">
            <a href="#home"><img src={home} alt="Home" className="w-[clamp(35px,2.5vw,100px)]"/></a>
            <a href="#sobre" className="font-[header] text-white hover:underline hover:scale-[1.05] cursor-pointer duration-200 ease-in-out">Sobre</a>
            <a href="#projetos" className="font-[header] text-white hover:underline hover:scale-[1.05] cursor-pointer duration-200 ease-in-out">Projetos</a>
            <a href="#competencias" className="font-[header] text-white hover:underline hover:scale-[1.05] cursor-pointer duration-200 ease-in-out">Competências</a>
            <a href="#contato" className="font-[header] text-white hover:underline hover:scale-[1.05] cursor-pointer duration-200 ease-in-out">Contatos</a>
        </nav>
    )
}