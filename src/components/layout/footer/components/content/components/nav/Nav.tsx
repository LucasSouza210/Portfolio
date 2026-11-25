import { navLinks } from "../../../../../../../utils/constants";
import Title from "./components/Title";
import Link from "./components/Link";

export default function Nav() {
    return (
        <div className="w-full lg:w-fit flex flex-col lg:self-start gap-4 sm:gap-4.25 md:gap-4.5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
            <Title />
            <div className="w-full lg:w-fit flex flex-col gap-5.5 sm:gap-6.25 md:gap-7 lg:gap-3.5 2xl:gap-5">
                {
                    navLinks.map((i, index) => (
                        <Link link={i} key={index} />
                    ))
                }
            </div>
        </div>
    )
}