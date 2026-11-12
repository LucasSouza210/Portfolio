import { IoClose } from "react-icons/io5";
import useOverlay from "../../../../../../hooks/ui/useOverlay";

export default function Close() {

    const { closeOverlay } = useOverlay()

    return (
        <button className="size-fit cursor-pointer text-action-muted" onClick={closeOverlay}>
            <IoClose className="size-6 sm:size-6.5 md:size-7" />
        </button>
    )
}