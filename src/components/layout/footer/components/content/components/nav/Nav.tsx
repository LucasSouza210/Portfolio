import { navLinks } from "../../../../../../../utils/constants";
import Title from "./components/Title";
import Link from "./components/Link";

export default function Nav() {
    return (
        <div className="w-full flex flex-col gap-3">
            <Title />
            {
                navLinks.map((i, index) => (
                    <Link link={i} key={index} />
                ))
            }
        </div>
    )
}