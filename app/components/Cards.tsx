"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardContent = {
    title: "Get Involved",
    cards: [
        { id: 1, icon: "/assets/users.svg", title: "Community-supported for collaboration", subtitle: "Check out our roadmap, contribute to projects, and help us make collaboration even easier.", link: { name: "Contribute to Github Desktop", href: "#" } },
        { id: 2, icon: "/assets/beaker.svg", title: "Try beta features and help improve future releases", subtitle: "Experience the latest features and bug fixes before they’re released.", link: { name: "Check out Beta", href: "#" }}
    ]
};

const Cards = () => {
    return (
        <section className="w-full">
            <section className="flex flex-col justify-center px-32 space-y-20 xl:px-0">
                <h2 className="text-5xl text-white font-semibold text-center md:text-[1.75rem]">
                    {cardContent.title}
                </h2>
                <section className="w-full flex items-center space-x-10 md:flex-col md:space-x-0 md:space-y-10">
                    {cardContent.cards.map((card) => (
                        <motion.section
                            key={card.id}
                            className="w-1/2 h-84 border border-zinc-400/20 rounded-2xl space-y-12 p-8 cursor-pointer md:w-full"
                            whileHover={{
                                background: "linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #17182c",
                                scale: 1.01,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <section className="space-y-8 w-[85%] lg:w-full">
                                <Image
                                    src={card.icon}
                                    width={24}
                                    height={24}
                                    alt="icon"
                                />
                                <h4 className="text-xl font-bold text-white">
                                    {card.title}
                                </h4>
                                <p className="text-base text-zinc-400 font-medium">
                                    {card.subtitle}
                                </p>
                            </section>
                            <section className="flex items-center space-x-1">
                                <Link href={card.link.href} passHref>
                                    <p className="text-base text-sky-300 font-semibold">
                                        {card.link.name}
                                    </p>
                                </Link>
                                <ChevronRightIcon className="w-4 h-4 text-sky-300" />
                            </section>
                        </motion.section>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default Cards;
