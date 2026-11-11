import useDropdown from "../../../../../hooks/ui/useDropdown"
import Dropdown from "./components/dropdown/Dropdown"
import Button from "./components/Button"

export default function Lang() {

    const { ref, open, toggle, close } = useDropdown()

    return (
        <div ref={ref} className="flex flex-col items-center relative">
            <Button toggle={toggle}/>
            <Dropdown open={open} close={close} />
        </div>
    )
}