"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Defining an object containing vital information for the Hero Section
const heroContent = {
    heading: "Experience Git without the struggle",
    subheading: "Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.",
    label: "GitHub Desktop",
    button: { text: "Download now", url: "#" },
    imageUrl: "/images/hero-img.png"
};

const Hero = () => {
    const router = useRouter();

    return (
        <section className="bg-[url('/images/hero-bg.webp')] bg-cover bg-center h-full w-full">
            <section className="space-y-16 p-32 xl:px-8">
                <section className="flex flex-col space-y-8 w-[65%] xl:w-full">
                    <section className="rounded-full border border-white w-fit">
                        <p className="text-sm text-white font-normal px-4 py-1">
                            {heroContent.label}
                        </p>
                    </section>
                    <p className="text-7xl text-white font-bold lg:text-4xl">
                        {heroContent.heading}
                    </p>
                    <p className="text-base text-white font-medium w-[60%] lg:w-full">
                        {heroContent.subheading}
                    </p>
                    <button
                        className="w-fit h-12 flex items-center space-x-1 px-4 bg-white rounded-md"
                        onClick={() => router.replace(heroContent.button.url)}
                    >
                        <p className="text-base text-zinc-950 font-semibold">
                            {heroContent.button.text}
                        </p>
                        <ChevronRightIcon className="text-zinc-950 w-4 h-4" />
                    </button>
                </section>
                <section className="w-full max-w-full">
                    <Image
                        src={heroContent.imageUrl}
                        width={1248}
                        height={856}
                        alt="Hero Image"
                        className="rounded-2xl"
                    />
                </section>
            </section>
        </section>
    );
};

export default Hero;
