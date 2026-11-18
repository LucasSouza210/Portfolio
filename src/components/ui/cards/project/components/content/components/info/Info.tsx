import Name from "./components/Name";
import Description from "./components/Description";

export default function Info({ name, description, soon }: { name: string, description: string, soon: boolean | undefined }) {
    return (
        <div className="flex flex-col gap-2.5">
            <Name name={name} soon={soon}/>
            <Description desc={soon ? 'developmentDescription' : description} />
        </div>
    )
}