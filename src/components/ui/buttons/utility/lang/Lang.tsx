import useDropdown from "../../../../../hooks/ui/useDropdown"
import Dropdown from "./components/dropdown/Dropdown"
import Button from "./components/Button"

export default function Lang({ mobile }: { mobile?: boolean }) {

    const { ref, open, toggle, close } = useDropdown()

    return (
        <div ref={ref} className={`flex-col items-center relative ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            <Button toggle={toggle} />
            <Dropdown open={open} close={close} />
        </div>
    )
}