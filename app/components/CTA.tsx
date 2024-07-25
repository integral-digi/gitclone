"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const ctaContent = {
    title: "Download now",
    subtitle: "Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop enables collaboration from your desktop and can simplify your development workflow.",
    buttons: [
        { text: "Download now", href: "#" },
        { text: "Release Notes", href: "#" }
    ]
};

const CTA = () => {
    const router = useRouter();
    return (
        <section className="bg-[#0d1117] rounded-3xl border border-zinc-400/20">
            <section className="flex flex-col justify-center items-center">
                <div className="space-y-6 text-center py-32 px-16 w-3/4 lg:w-full lg:px-10 lg:py-20">
                    <h2 className="text-7xl text-white font-bold lg:text-4xl">
                        {ctaContent.title}
                    </h2>
                    <p className="text-base text-zinc-400 font-medium ">
                        {ctaContent.subtitle}
                    </p>
                    <div className="flex items-center space-x-2 justify-center md:flex-col md:space-x-0 md:space-y-2">
                        {ctaContent.buttons.map((button, index) => (
                            <button
                                key={index}
                                className={`w-fit h-12 flex items-center justify-center space-x-1 px-4 rounded-md md:w-full ${
                                    index === 0
                                        ? "bg-white text-zinc-950"
                                        : "bg-transparent border border-zinc-400 text-white hover:bg-[#161b22] hover:border-white hover:border-2 hover:ease-in-out"
                                }`}
                                onClick={() => router.replace(button.href)}
                            >
                                <p className="text-base font-medium">
                                    {button.text}
                                </p>
                                {index === 0 && (
                                    <ChevronRightIcon className="w-4 h-4" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CTA;
