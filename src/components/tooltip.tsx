type TooltipProps = {
    children: React.ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
    return <div className="group relative">{children}</div>;
}

type TooltipContentProps = {
    children: React.ReactNode;
};

export function TooltipContent({ children }: TooltipContentProps) {
    return (
        <div className="-z-10 absolute top-0 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:-top-8 group-hover:opacity-100 transition-all text-nowrap">
            {children}
        </div>
    );
}
