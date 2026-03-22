import file from '../assets/img/file.svg'
import backBlack from '../assets/img/backBlack.svg'
import zap from '../assets/img/zap.svg'
import email from '../assets/img/email.svg'

export function Comunication() {
    return (
        <section className="grid grid-rows-[auto_auto]">
            <section className="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] rounded-[6px] bg-[#E8E8E8] h-auto w-[clamp(21rem,32vw,40rem)]  items-center justify-self-center lg:justify-self-start">
                <img src={file} className="w-[clamp(1.1rem,1.1vw,2.1rem)] self-center"/>
                <section className="grid col-start-2  justify-self-end gap-x-[20px] pr-[5px] items-center">
                    <img src={backBlack} className="w-[clamp(1.4rem,1.2vw,2.2rem)]"/>
                </section>
                <section className="bg-white grid col-span-2 grid-cols-[auto_1fr] justify-items-center h-full pt-[20px] pb-[10px] rounded-b-[4px] pl-[15px] gap-x-[17px] gap-y-[10px]">
                    <img src={zap} className="grid w-[clamp(3rem,3vw,4rem)] col-start-1 row-start-1"/>
                    <div className="grid grid-rows-[auto_auto] col-start-2 justify-items-start justify-self-start">
                        <h1 className="font-semibold text-[clamp(1.1rem,1vw,2rem)]">WhatsApp</h1>
                        <p className='text-[clamp(0.8rem,0.9vw,1.5rem)]'>+55 11 94844-6267</p>
                    </div>
                    <img src={email} className="grid w-[clamp(3rem,3vw,4.5rem)] col-start-1 row-start-2"/>
                    <div className="grid grid-rows-[auto_auto] col-start-2 justify-items-start justify-self-start">
                        <h1 className="font-semibold text-[clamp(1.1rem,1vw,2rem)]">Email Pessoal</h1>
                        <p className='text-[clamp(0.8rem,0.9vw,1.5rem)]'>guicava.2017@gmail.com</p>
                    </div>
                </section>          
            </section>
        </section>
    )
}