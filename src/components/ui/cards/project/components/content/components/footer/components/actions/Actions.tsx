import Link from "./components/Link";
import Repository from "./components/Repository";

export default function Actions({ url, git }: { url: string, git: string }) {
    return (
        <div className="h-fit flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            <Repository git={git} />
            <Link url={url} />
        </div>
    )
}