"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const sectionContent = {
    header: "The ultimate GUI Git client",
    subHeader: "for streamlining and enhancing your local code management process",
    features: [
        {
            title: "Review code changes with precision",
            description: "Easily compare versions to catch every detail and ensure your code update is flawless.",
            linkText: "Read more about diff options",
            linkUrl: "#",
            imageSrc: "/images/div-zero.webp"
        },
        {
            title: "Drag and drop to cherry-pick, squash, or reorder commits",
            description: "Copy commits from one branch to another, combine multiple commits in your branch history, or alter your commit history with an intuitive drag and drop functionality unique to GitHub Desktop.",
            linkText: "Options for managing commits in GitHub Desktop",
            linkUrl: "#",
            imageSrc: "/images/div-one.webp"
        }
    ],
    stashFeature: {
        title: "Stash your changes without committing them to a branch",
        listText: "Manage your work-in-progress by saving changes that you’re not ready to commit to quite yet.",
        listDescription: "This will maximize your efficiency, flexibility, and creativity.",
        imageSrc: "/images/div-two.webp"
    },
    managementFeature: {
        title: "Maintain flexibility and seamless management of your codebase",
        description: "Make adjustments to update messages, incorporate new changes, or revert to earlier states when needed. Easily make changes to your project’s history with simple adjustments and reversals.",
        imageSrc: "/images/div-three.webp"
    }
};

const InfoSection = () => {
    return (
        <section className="w-full">
            <section className="space-y-36">
                <section className="text-[2.5rem] font-bold w-[80%] lg:w-full lg:text-2xl">
                    <span className="text-white">
                        {sectionContent.header}
                    </span>
                    <span className="text-zinc-400">
                        {sectionContent.subHeader}
                    </span>
                </section>
                <section className="space-y-24">
                    {sectionContent.features.map((feature, index) => (
                        <section key={index} className="flex items-center justify-between lg:flex-col lg:space-y-6">
                            <section className="space-y-6 w-[40%] lg:w-full">
                                <p className="text-[2.5rem] text-white font-bold lg:text-2xl">
                                    {feature.title}
                                </p>
                                <p className="text-base text-zinc-400 font-medium">
                                    {feature.description}
                                </p>
                                <motion.section
                                    className="relative flex items-center space-x-1"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    <Link href={feature.linkUrl} passHref>
                                        <p className="font-bold text-base text-white relative">
                                            {feature.linkText}
                                            <motion.span
                                                className="absolute left-0 bottom-0 h-[0.125rem] bg-white w-full origin-left"
                                                variants={{
                                                    rest: { scaleX: 0 },
                                                    hover: { scaleX: 1 }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </p>
                                    </Link>
                                    <ChevronRightIcon className="w-4 h-4 text-white" />
                                </motion.section>
                            </section>
                            <section className="w-[55%] lg:w-full max-w-full">
                                <Image   
                                    src={feature.imageSrc}
                                    width={720}
                                    height={492}
                                    alt={feature.title}
                                />
                            </section>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default InfoSection;