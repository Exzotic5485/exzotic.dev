"use client";
import PenguinIcon from "@/components/svg/penguin-icon";
import { useEffect, useRef } from "react";

const IGNORED_ELEMENTS = ["A", "BUTTON"];

const extractPx = (str: string) => parseFloat(str.replace(/[^\d.]/g, ""));

export function Penguin() {
    const staticRef = useRef<SVGSVGElement | null>(null);
    const movingRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const staticPenguin = staticRef.current;
        const movingPenguin = movingRef.current;

        if (!staticPenguin || !movingPenguin) return;

        const { signal, abort } = new AbortController();

        console.log(staticPenguin);
        console.log(staticPenguin.clientTop, staticPenguin.clientLeft);

        const rect = staticPenguin.getBoundingClientRect();
        movingPenguin.style.top = rect.y + "px";
        movingPenguin.style.left = rect.x + "px";

        let frame = 0;

        const handleWaddle = (x: number, y: number, returnHome = true) => {
            staticPenguin.classList.add("invisible");
            movingPenguin.classList.remove("invisible");
            movingPenguin.classList.add("waddle");

            const targetY = y - rect.height / 2;
            const targetX = x - rect.width / 2;

            const curY = extractPx(movingPenguin.style.top);
            const curX = extractPx(movingPenguin.style.left);

            const speed = 2;
            const angle = Math.atan2(targetY - curY, targetX - curX);
            const destY = curY + speed * Math.sin(angle);
            const destX = curX + speed * Math.cos(angle);

            movingPenguin.style.top = destY + "px";
            movingPenguin.style.left = destX + "px";

            if (destX < curX) {
                movingPenguin.style.setProperty("--scale", "-1");
            } else {
                movingPenguin.style.setProperty("--scale", "1");
            }

            if (
                Math.abs(targetY - destY) > speed ||
                Math.abs(targetX - destX) > speed
            ) {
                frame = requestAnimationFrame(() =>
                    handleWaddle(x, y, returnHome)
                );
            } else {
                movingPenguin.style.top = targetY + "px";
                movingPenguin.style.left = targetX + "px";

                if (returnHome) {
                    frame = requestAnimationFrame(() =>
                        handleWaddle(
                            rect.x + rect.width / 2,
                            rect.y + rect.height / 2,
                            false
                        )
                    );
                } else {
                    staticPenguin.classList.remove("invisible");
                    movingPenguin.classList.remove("waddle");
                    movingPenguin.classList.add("invisible");
                }
            }
        };

        window.addEventListener(
            "click",
            (e: MouseEvent) => {
                if (!(e.target instanceof HTMLElement)) return;

                if (IGNORED_ELEMENTS.includes(e.target.tagName)) return;

                const selection = window.getSelection();

                if (selection && selection.toString().length > 0) return;

                cancelAnimationFrame(frame);

                handleWaddle(e.clientX, e.clientY);
            },
            { signal }
        );

        return () => {
            abort();
        };
    }, []);

    return (
        <>
            <PenguinIcon
                ref={staticRef}
                className="h-6 w-auto"
            />
            <PenguinIcon
                ref={movingRef}
                className="h-6 w-auto fixed top-0 left-0 pointer-events-none cursor-none invisible"
            />
        </>
    );
}
