import type { MouseEventHandler } from "react";

export default function UtilityButton({ children, className, menu, label, onClick }: { children: React.ReactNode, className?: string, menu?: boolean, label: string, onClick: MouseEventHandler }) {
    return (
        <button className={`items-center justify-center ${menu ? 'flex lg:hidden text-action-muted' : 'h-10 sm:h-11 md:h-12 lg:size-auto flex max-lg:border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-full max-lg:action-default border-default text-action lg:text-action-muted'} ${className}`} aria-label={label} onClick={onClick}>
            {children}
        </button>
    )
}