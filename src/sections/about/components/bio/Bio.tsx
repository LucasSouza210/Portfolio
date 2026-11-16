import Content from "./components/Content";
import Heading from "../../../../components/ui/tipography/Heading";

export default function Bio() {
    return (
        <div className="w-full flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Heading text="Bio" translate={false} />
            <Content />
        </div>
    )
}