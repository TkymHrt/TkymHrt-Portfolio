'use client';

import { motion } from "framer-motion";
import { Element } from "react-scroll";

const HERO_WORDS_DESKTOP = ["IT", "IS", "FRONT-END", "DEVELOPER'S", "PORTFOLIO", "SITE."];
const HERO_WORDS_MOBILE_ROW1 = ["IT", "IS", "FRONT-END", "DEVELOPER'S"];
const HERO_WORDS_MOBILE_ROW2 = ["PORTFOLIO", "SITE."];

const dragConstraints = { top: -200, left: -200, right: 200, bottom: 200 };

const HeroHeader = () => (
    <Element name="Home">
        <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-4 mb-[30vh]">
            <motion.div
                className="-z-40"
                drag
                dragConstraints={dragConstraints}
                dragSnapToOrigin={true}
                style={{ willChange: "transform" }}
            >
                <p className="font-Noto text-[8.5vw] font-black text-[#663556] text-nowrap">I'm Takayama Haruto.</p>
            </motion.div>
            <div className="font-Noto hidden md:flex justify-center items-center gap-4 break-normal tracking-[0.4em]">
                {HERO_WORDS_DESKTOP.map((text) => (
                    <p key={text} className="text-2xl">{text}</p>
                ))}
            </div>
            <div className="font-Noto flex md:hidden justify-center items-center flex-col">
                <div className="flex gap-3">
                    {HERO_WORDS_MOBILE_ROW1.map((text) => (
                        <p key={text} className="text-1xl">{text}</p>
                    ))}
                </div>
                <div className="flex gap-3">
                    {HERO_WORDS_MOBILE_ROW2.map((text) => (
                        <p key={text} className="text-1xl">{text}</p>
                    ))}
                </div>
            </div>
        </div>
    </Element>
);

export default HeroHeader;