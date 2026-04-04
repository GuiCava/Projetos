import node from '../assets/img/node-js-svgrepo-com.svg'

export function Node() {
    return (
        <div className="comp load-hidden grid bg-black rounded-[clamp(0.5rem,0.5vw,1rem)] py-[clamp(0.1rem,1vw,1.5rem)] justify-items-center items-center px-[clamp(1.4rem,2.2vw,2.7rem)] gap-y-[clamp(0.2rem,0.5vw,0.5rem)] shadow-[0px_0px_30px]">
            <img src={node} className="w-[clamp(7rem,7vw,10rem)]"/>
            <h1 className="text-white font-[inter] text-[clamp(1.3rem,1.5vw,2rem)] font-medium">NodeJs</h1>
        </div>
    )
}