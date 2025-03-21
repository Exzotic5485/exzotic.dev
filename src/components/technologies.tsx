"use client";

import DiscordjsIcon from "@/components/svg/discordjs-icon";
import GoIcon from "@/components/svg/go-icon";
import HonoIcon from "@/components/svg/hono-icon";
import JWTIcon from "@/components/svg/jwt-icon";
import NextJSIcon from "@/components/svg/nextjs-icon";
import PostgreSQLIcon from "@/components/svg/postgres-icon";
import ReactIcon from "@/components/svg/react-icon";
import TailwindCSSIcon from "@/components/svg/tailwind-icon";
import TypeScriptIcon from "@/components/svg/typescript-icon";
import { Tooltip, TooltipContent } from "@/components/tooltip";

const TECHNOLOGIES = [
    {
        icon: TypeScriptIcon,
        label: "Typescript",
    },
    {
        icon: ReactIcon,
        label: "React",
    },
    {
        icon: NextJSIcon,
        label: "NextJS",
    },
    {
        icon: TailwindCSSIcon,
        label: "Tailwind CSS",
    },
    {
        icon: HonoIcon,
        label: "Hono",
    },
    {
        icon: JWTIcon,
        label: "JWT",
    },
    {
        icon: PostgreSQLIcon,
        label: "PostgreSQL",
    },
    {
        icon: GoIcon,
        label: "Go",
    },
    {
        icon: DiscordjsIcon,
        label: "Discord.JS",
    },
];

export function Technologies() {
    return (
        <div className="relative w-full py-4 h-auto">
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="w-full flex items-center justify-evenly gap-12 flex-wrap">
                {TECHNOLOGIES.map((tech) => (
                    <Tooltip key={tech.label}>
                        <TooltipContent>{tech.label}</TooltipContent>
                        <div className="hover:scale-120 transition-all">
                            <tech.icon className="size-12" />
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}
