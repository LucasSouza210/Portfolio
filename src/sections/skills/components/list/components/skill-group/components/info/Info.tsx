import Description from "./components/Description";
import Title from "./components/Title";

export default function Info({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <Title title={title} />
            <Description desc={desc} />
        </div>
    )
}