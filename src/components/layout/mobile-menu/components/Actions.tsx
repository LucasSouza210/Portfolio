import Mode from "../../../ui/buttons/utility/Mode";
import Lang from "../../../ui/buttons/utility/lang/Lang";

export default function Actions() {
    return (
        <div className="flex items-center gap-2.5 sm:gap-2.75 md:gap-3">
            <Mode />
            <Lang />
        </div>
    )
}