import Link from "./components/Link";
import Repository from "./components/Repository";

export default function Actions({ url, git }: { url: string, git: string }) {
    return (
        <div className="h-fit flex items-center gap-2.5">
            <Repository git={git} />
            <Link url={url} />
        </div>
    )
}