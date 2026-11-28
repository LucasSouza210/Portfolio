import { useTranslate } from "../../../../hooks/useTranslate";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useTheme from "../../../../hooks/useTheme";
import UtilityButton from "../ui/UtilityButton";

export default function Mode({ mobile }: { mobile?: boolean }) {

    const { theme, toggleTheme } = useTheme()

    const { line } = useTranslate()

    const isLight = theme == 'light'

    const Icon = isLight ? FaRegSun : FaRegMoon

    return (
        <UtilityButton className={`aspect-square lg:aspect-auto ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`} label={line(isLight ? 'ariaSwitchToDark' : 'ariaSwitchToLight')} onClick={toggleTheme}>
            <Icon className="size-4 xl:size-4.5 2xl:size-5" />
        </UtilityButton>
    )
}