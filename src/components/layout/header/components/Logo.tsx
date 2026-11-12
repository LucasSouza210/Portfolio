export default function Logo({ className }: { className?: string }) {
    return (
        <p className={`font-medium tracking-wider outfit-font text-title ${className ?? 'text-xl sm:text-[22px] md:text-2xl lg:text-lg xl:text-[21px] 2xl:text-2xl '}`}>
            LS<span className="text-indigo-500">.</span>
        </p>
    )
}