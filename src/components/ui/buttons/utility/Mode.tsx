import { useTranslate } from "../../../../hooks/useTranslate";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useTheme from "../../../../hooks/useTheme";
import UtilityButton from "../ui/UtilityButton";

export default function Mode() {

    const { theme, toggleTheme } = useTheme()

    const { line } = useTranslate()

    const isLight = theme == 'light'

    const Icon = isLight ? FaRegSun : FaRegMoon

    return (
        <UtilityButton className="aspect-square lg:aspect-auto" label={line(isLight ? 'ariaSwitchToDark' : 'ariaSwitchToLight')} onClick={toggleTheme}>
            <Icon className="size-1/2" />
        </UtilityButton>
    )
}