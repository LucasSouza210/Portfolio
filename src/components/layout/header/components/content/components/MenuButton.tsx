import { IoMenu } from "react-icons/io5";
import useOverlay from "../../../../../../hooks/ui/useOverlay";
import UtilityButton from "../../../../../ui/buttons/ui/UtilityButton";
import MobileMenu from "../../../../mobile-menu/MobileMenu";

export default function MenuButton() {

    const { openOverlay } = useOverlay()

    const handleOpen = () => {
        openOverlay(<MobileMenu />, { self: true, mobileOnly: true })
    }

    return (
        <UtilityButton menu label="ariaOpenMenu" onClick={handleOpen}>
            <IoMenu className="size-1/2" />
        </UtilityButton>
    )
}