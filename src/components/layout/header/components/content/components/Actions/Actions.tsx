import Lang from "../../../../../../ui/buttons/utility/lang/Lang";
import Mode from "../../../../../../ui/buttons/utility/Mode";

export default function Actions() {
    return (
        <div className="hidden lg:flex items-center lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <Lang />
            <Mode />
        </div>
    )
}