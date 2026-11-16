import Meta from "./components/meta/Meta";
import Name from "./components/Name";
import Role from "./components/Role";
import Stack from "./components/stack/Stack";

export default function Info() {
    return (
        <div className="flex flex-col gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-3 xl:gap-3.25 2xl:gap-3.5">
            <div className="flex flex-col lg:items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                <Name />
                <Role />
            </div>
            {/* <Stack /> */}
            <Meta />
        </div>
    )
}