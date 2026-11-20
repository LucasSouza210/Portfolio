import Name from "./components/Name";
import Description from "./components/Description";

export default function Info({ name, description, soon }: { name: string, description: string, soon: boolean | undefined }) {
    return (
        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
            <Name name={name} soon={soon} />
            <Description desc={soon ? 'developmentDescription' : description} />
        </div>
    )
}