import Title from "./components/Title";
import Content from "./components/Content";

export default function Bio() {
    return (
        <div className="w-full flex flex-col gap-1 ">
            <Title />
            <Content />
        </div>
    )
}