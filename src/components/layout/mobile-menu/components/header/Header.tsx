import Logo from "../../../header/components/Logo";
import Close from "./components/Close";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-start">
            <Logo className="text-2xl sm:text-[26px] md:text-[28px]" />
            <Close />
        </header>
    )
}