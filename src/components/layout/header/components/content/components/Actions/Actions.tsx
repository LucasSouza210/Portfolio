import Lang from "../../../../../../ui/buttons/utility/lang/Lang";
import Mode from "../../../../../../ui/buttons/utility/Mode";

export default function Actions() {
    return (
        <div className="hidden lg:flex items-center lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Lang />
            <Mode />
        </div>
    )
}