import type { MouseEventHandler } from "react";

export default function UtilityButton({ children, className, menu, label, onClick }: { children: React.ReactNode, className?: string, menu?: boolean, label: string, onClick: MouseEventHandler }) {
    return (
        <button className={`items-center justify-center text-action ${menu ? 'size-8 sm:size-8.5 md:size-9 flex lg:hidden border rounded-md sm:rounded-[7px] md:rounded-lg action-layout border-action' : 'h-10 sm:h-11 md:h-12 lg:size-auto flex max-lg:border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-full max-lg:action-default border-default lg:text-action-muted'} ${className}`} aria-label={label} onClick={onClick}>
            {children}
        </button>
    )
}