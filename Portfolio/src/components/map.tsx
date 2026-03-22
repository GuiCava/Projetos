import maps from '../assets/img/maps.svg'
import backBlack from '../assets/img/backBlack.svg'

export function Map() {
    return (
        <section className="grid grid-rows-[auto_auto]">
            <section className="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] pb-[3px] rounded-[6px] lg: bg-[#E8E8E8] h-auto w-[clamp(21rem,32vw,40rem)]  items-center justify-self-center lg:justify-self-start">
                <img src={maps} className="w-[clamp(1.1rem,1.1vw,2.1rem)] self-center"/>
                <section className="grid col-start-2  justify-self-end gap-x-[20px] pr-[5px] items-center">
                    <img src={backBlack} className="w-[clamp(1.4rem,1.2vw,2.2rem)]"/>
                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117134.38445216468!2d-46.54782921295016!3d-23.44424472130243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef53fb1b5e26d%3A0x974ce18d22c3555b!2sGuarulhos%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1750192172398!5m2!1spt-BR!2sbr" width="300" height="270" loading="lazy" className="w-full grid col-span-2 px-[3px] "></iframe>
            </section>
        </section>
    )
}