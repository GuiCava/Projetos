import { Quemeusou } from "../sections/quemeusou"
import { Sobre } from "../sections/sobre"
import { Projetos } from "../sections/projetos"
import { Competencias } from "../sections/competencias"
import { Contatos } from "../sections/contatos"

export function Main() {
  return (
    <main className="grid grid-rows-[auto_auto_auto_auto_auto] lg:grid-rows-[auto_auto_auto_auto_auto] w-full gap-y-[clamp(2rem,6vw,8rem)]">
        < Quemeusou />
        < Sobre />
        < Projetos />
        < Competencias />
        < Contatos />
    </main>
  )
}