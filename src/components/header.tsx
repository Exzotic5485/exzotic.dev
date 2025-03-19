import { Penguin } from "@/components/penguin";
import Link from "next/link";

export function Header() {
    return (
        <div className="sticky bg-white/10 top-4 py-4 px-8 rounded-full border flex items-center justify-between">
            <Link
                href="/"
                className="text-xl select-none flex items-center gap-2"
            >
                <Penguin />
                exzotic.dev
            </Link>
            <div className="flex items-center gap-6">
                <Link href="#projects">Projects</Link>
                <Link href="#projects">Contact</Link>
            </div>
        </div>
    );
}
