import Name from "./components/Name";
import Role from "./components/Role";
import Stack from "./components/stack/Stack";

export default function Info() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-1">
                <Name />
                <Role />
            </div>
            <Stack />
        </div>
    )
}