import Niver from "../assets/img/projeto1.svg"

export function CartNiver() {
    return (
        <a className=" cart load-hidden grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr] cursor-pointer hover:scale-[1.02]  max-w-[clamp(300px,27vw,36rem)] transition-transform ease-in-out duration-400" href="https://guicava.github.io/Projetos/CartãoAniversário" target="_blank">
          <img src={Niver} className="rounded-t-[clamp(1rem,1.5vw,2.3rem)]"/>
          <div className="grid bg-[#1a1a1a] rounded-b-[clamp(1rem,1.5vw,2.3rem)] p-[clamp(1.4rem,1.5vw,3rem)] grid-rows-[auto_auto] gap-y-[clamp(0.5rem,0.2vw,1.2rem)] ">
            <h1 className= "text-white font-[inter] text-[clamp(1rem,1.8vw,2.3rem)] font-bold">Cartão de Aniversário</h1>
            <p className= "text-white font-[inter] text-[clamp(1rem,1.1vw,2rem)] ">Cartão de aniversário digital para enviar mensagens especiais de forma online. Contém uma animação simples, uma mensagem de parabéns e elementos visuais simples e bonitos. É uma forma criativa de parabenizar alguém importante ou que você ame.</p>
          </div>
        </a>
    )
}