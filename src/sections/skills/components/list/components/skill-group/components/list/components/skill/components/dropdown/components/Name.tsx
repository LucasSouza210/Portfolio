export default function Name({ name }: { name: string }) {
    return (
        <p className="text-base sm:text-[17px] md:text-lg lg:text-[13px] xl:text-sm 2xl:text-[15px] font-medium tracking-wider leading-min text-title">
            {name}
        </p>
    )
}