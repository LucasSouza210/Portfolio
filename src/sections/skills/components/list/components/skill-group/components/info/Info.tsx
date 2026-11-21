import Description from "./components/Description";
import Title from "./components/Title";

export default function Info({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex flex-col gap-2">
            <Title title={title} />
            <Description desc={desc} />
        </div>
    )
}