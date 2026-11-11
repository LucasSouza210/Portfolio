import { TbWorld } from "react-icons/tb";
import UtilityButton from "../../../ui/UtilityButton";
import useLang from "../../../../../../hooks/useLang";

export default function Button({ toggle }: { toggle: () => void }) {

    const { lang } = useLang()

    return (
        <UtilityButton className="gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-0 px-3.5 sm:px-4 md:px-4.5 lg:px-0" label="ariaChangeLanguage" onClick={toggle}>
            <TbWorld className="size-3.5 sm:size-4 md:size-4.5 lg:size-3/5" />
            <span className="block lg:hidden text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wider leading-none uppercase">
                {lang}
            </span>
        </UtilityButton>
    )
}