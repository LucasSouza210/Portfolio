import { navLinks } from "../../../../../utils/constants";
import MenuLink from "./components/Link";

export default function Nav() {
    return (
        <nav className="w-full flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 py-3 sm:py-3.25 md:py-3.5 border-y border-default">
            {
                navLinks.map((link, index) => (
                    <MenuLink link={link} key={index} />
                ))
            }
        </nav>
    )
}