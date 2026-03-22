import TNR from "../assets/img/projeto2.svg"


export function CartTNR() {
    return (
        <a className="grid grid-rows-[auto_auto] lg:grid-rows-[auto_1fr] cursor-pointer hover:scale-[1.02] duration-600 ease-in-out max-w-[clamp(300px,27vw,36rem)]" href="https://guicava.github.io/Projetos/TNR" target="_blank">
          <img src={TNR} className="rounded-t-[clamp(1rem,1.5vw,2.3rem)]"/>
          <div className="grid bg-[#1a1a1a] rounded-b-[clamp(1rem,1.5vw,2.3rem)] p-[clamp(1.4rem,1.5vw,3rem)] grid-rows-[auto_auto] gap-y-[clamp(0.5rem,0.2vw,1.2rem)] ">
            <h1 className= "text-white font-[inter] text-[clamp(1rem,1.8vw,2.3rem)] font-bold">Tente não rir</h1>
            <p className= "text-white font-[inter] text-[clamp(1rem,1.1vw,2rem)] ">O projeto é um site que exibi piadas na tela e detecta, através da câmera do cliente, se ele deu alguma risada ou não. As piadas foram pegas a partir de um JSON e, a detecção facial foi feita através de uma API.</p>
          </div>
        </a> 
    )
}