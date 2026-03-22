import { Nav } from "./nav"

export function Header() {
    return(
        <header className="text-center w-full border-solid content-center justify-items-center px-[8px] sticky top-0 z-50 pt-[clamp(6px,1vw,30px)]">
            <Nav />
        </header>
    )
}