import { Header } from "@/components/header";
import DiscordIcon from "@/components/svg/discord-icon";
import GithubIcon from "@/components/svg/github-icon";
import { Technologies } from "@/components/technologies";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative max-w-5xl mx-auto px-4 lg:px-0 py-8">
            <div className="fixed inset-0 -z-30 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="fixed inset-0 -z-20 h-full w-full bg-[linear-gradient(to_bottom_right,hsla(var(--primary)/0.3),transparent)]" />
            <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
            <Header />
            <section className="py-16 flex flex-col gap-16">
                <div className="flex flex-col max-w-xl mx-auto items-center text-center gap-8">
                    <img
                        src="https://avatars.githubusercontent.com/u/61587328?v=4"
                        alt=""
                        className="rounded-full size-28 hover:rotate-360 hover:scale-120 duration-500 transition-all"
                    />
                    <div className="space-y-2">
                        <h1 className="text-5xl tracking-tighter">
                            Hi, I&apos;m{" "}
                            <span className="font-bold">Exzotic</span>.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                    </div>
                    <div className="flex items-center gap-8">
                        <Link
                            target="_blank"
                            href="https://github.com/Exzotic5485"
                        >
                            <GithubIcon className="size-8" />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://discordapp.com/users/305777811799670806"
                        >
                            <DiscordIcon className="size-8 !fill-white" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-16 space-y-6">
                <h2 className="text-center text-2xl">
                    Technologies i&apos;m familiar with:
                </h2>
                <Technologies />
            </section>
        </div>
    );
}
