import type { Project } from "../../../../utils/constants";
import Preview from "./components/preview/Preview";
import Content from "./components/content/Content";

export default function Project({ project }: { project: Project }) {
    return (
        <div className="w-full flex flex-col border rounded-[30px] sm:rounded-[34px] md:rounded-[38px] lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl overflow-hidden group bg-default border-action transition-[box-shadow,border-color] duration-300 ease-out hover:shadow-[0_8px_28px_-10px_rgb(105_90_173/0.28)] focus-within:shadow-[0_8px_28px_-10px_rgb(105_90_173/0.28)] motion-reduce:transition-none">
            <Preview project={project} />
            <Content project={project} />
        </div>
    )
}