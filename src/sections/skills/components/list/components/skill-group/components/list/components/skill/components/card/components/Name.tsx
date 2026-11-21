export default function Title({ name }: { name: string }) {
    return (
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-5 sm:leading-5.75 md:leading-6.5 lg:leading-3.5 xl:leading-4.25 2xl:leading-5 text-wrap wrap-anywhere text-default">
            {name}
        </p>
    )
}