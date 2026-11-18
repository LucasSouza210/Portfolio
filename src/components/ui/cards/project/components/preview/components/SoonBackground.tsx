export default function SoonBackground() {
    return (
        <div aria-hidden="true" className="absolute inset-0 flex flex-col overflow-hidden">
            <div className="h-[7cqw] w-full flex-none border-b border-default">
                <div className="mx-auto w-[76%] h-full flex items-center gap-[1.7cqw] px-[3.4cqw]">
                    <span className="size-[1.7cqw] rounded-full bg-border" />
                    <span className="size-[1.7cqw] rounded-full bg-border" />
                    <span className="size-[1.7cqw] rounded-full bg-border" />
                    <span className="ml-[2.3cqw] h-[2.3cqw] w-1/3 rounded-xs bg-border" />
                </div>
            </div>
            <div className="mx-auto w-[76%] flex-1 min-h-0 flex flex-col gap-[2.9cqw] px-[3.4cqw] py-[3.4cqw]">
                <span className="h-[2.9cqw] w-2/5 flex-none rounded-xs bg-border" />
                <span className="h-[1.7cqw] w-3/5 flex-none rounded-[1px] bg-zinc-200 dark:bg-zinc-900" />
                <span className="h-[3.4cqw] w-1/5 flex-none rounded-xs bg-indigo-500" />
                <div className="flex-1 min-h-0 flex gap-[2.3cqw] mt-[1.1cqw]">
                    <span className="flex-1 border border-default rounded-md bg-zinc-100 dark:bg-zinc-900" />
                    <span className="flex-1 border border-default rounded-md bg-zinc-100 dark:bg-zinc-900" />
                    <span className="flex-1 border border-default rounded-md bg-zinc-100 dark:bg-zinc-900" />
                </div>
                <span className="h-[1.7cqw] w-2/3 flex-none bg-zinc-200 dark:bg-zinc-900" />
            </div>
        </div>
    )
}