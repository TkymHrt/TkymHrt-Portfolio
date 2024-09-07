import { motion } from "framer-motion";
import { Element } from "react-scroll";

const commonClasses = "font-Noto text-lg text-stone-950 mx-10";
const motionDivClasses = "h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

export default function App() {
    return (
        <div className="flex justify-center items-center flex-col space-y-7 pb-96">
            <Element name="Home">
                <div className="h-[100vh] w-[98vw] flex justify-center items-center flex-col gap-4 mb-[30vh]">
                    <motion.div
                        className="-z-40"
                        drag
                        dragConstraints={{
                            top: -200,
                            left: -200,
                            right: 200,
                            bottom: 200,
                        }}
                        dragSnapToOrigin={true}
                    >
                        <p className="font-Noto text-[8.5vw] font-black text-[#663556] text-nowrap">I'm Takayama Haruto.</p>
                    </motion.div>
                    <div className="font-Noto hidden md:flex justify-center items-center gap-4 break-normal tracking-[0.4em]">
                        {["IT", "IS", "FRONT-END", "DEVELOPER'S", "PORTFOLIO", "SITE."].map((text) => (
                            <p key={text} className="text-2xl">{text}</p>
                        ))}
                    </div>
                    <div className="font-Noto flex md:hidden justify-center items-center flex-col">
                        <div className="flex gap-3">
                            {["IT", "IS", "FRONT-END", "DEVELOPER'S"].map((text) => (
                                <p key={text} className="text-1xl">{text}</p>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            {["PORTFOLIO", "SITE."].map((text) => (
                                <p key={text} className="text-1xl">{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="About">
                <motion.div className={motionDivClasses} whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }}>
                    <h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5 mx-10 mt-8">About</h2>
                    <p className={`md:flex hidden font-bold ${commonClasses}`}>長岡技術科学大学 工学部 機械工学分野 2年</p>
                    <p className={`md:flex hidden ${commonClasses} mb-8`}>技大祭実行委員会 情報局 / NUTMEG / フロントエンジニア</p>
                    <p className={`flex md:hidden font-bold ${commonClasses} mb-2`}>
                        長岡技術科学大学 工学部
                        <br />
                        機械創造工学課程 2年
                        <br />
                    </p>
                    <p className={`flex md:hidden ${commonClasses} mb-8`}>
                        技大祭実行委員会
                        <br />
                        情報局 / NUTMEG
                        <br />
                        フロントエンジニア
                    </p>
                </motion.div>
            </Element>
            <Element name="Works">
                <motion.div className={motionDivClasses} whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }}>
                    <h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Works</h2>
                    <div className="w-full">
                        <ol className="relative border-s border-[#252525] space-y-10">
                            {[
                                { date: "March 2023", title: "新潟明訓高等学校 卒業" },
                                { date: "April 2023", title: "長岡技術科学大学 入学" },
                                { date: "July 2023", title: "技育展2023 中部ブロック予選 参加" },
                                { date: "February 2024", title: "【技育CAMP】マンスリーハッカソン vol.14 参加" },
                                { date: "August 2024", title: "【技育CAMP】マンスリーハッカソン vol.12 参加" },
                                { date: "September 2024", title: "技育博 Vol.4 参加" },
                            ].map((item, index) => (
                                <li key={index} className="ms-4 flex flex-col items-start">
                                    <div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]"></div>
                                    <time className="mb-1 text-sm font-Noto leading-none text-stone-950">{item.date}</time>
                                    <h3 className="text-xl font-bold text-stone-950">{item.title}</h3>
                                </li>
                            ))}
                        </ol>
                    </div>
                </motion.div>
            </Element>
            <Element name="Contact">
                <motion.div className={motionDivClasses} whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }}>
                    <h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Contact</h2>
                    <div className="flex flex-row gap-4 w-full mb-5">
                        {[
                            { href: "https://www.instagram.com/mikan_taka.h/", src: "Icons/Instagram_icon.svg", alt: "Instagram Link", text: "Instagram" },
                            { href: "https://twitter.com/ForHobbiesBY", src: "Icons/X_icon.svg", alt: "X Link", text: "X" },
                            { href: "https://github.com/TkymHrt", src: "Icons/GitHub_icon.svg", alt: "GitHub Link", text: "GitHub" },
                        ].map((link, index) => (
                            <a key={index} className="flex flex-col items-center gap-1" href={link.href}>
                                <img width={50} src={link.src} alt={link.alt} />
                                <p className="font-Noto md:text-base text-xs">{link.text}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </Element>
        </div>
    );
}