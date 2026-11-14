import Avatar from "./components/Avatar";
import Info from "./components/info/Info";

export default function Profile() {
    return (
        <div className="w-full flex gap-4">
            <Avatar />
            <Info />
        </div>
    )
}