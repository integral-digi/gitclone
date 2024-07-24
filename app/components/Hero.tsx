"use client"
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

//defining an object containing vital information in the Hero Section
const heroItems = {
    title: "Experience Git without the struggle",
    subtitle: "Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.",
    label: "Github Desktop",
    button: { text: "Download now", url: "#" },
    image: "/images/hero-img.png"
}
 
 const Hero = () => {
    const router = useRouter();

    return (
        <section className="bg-[url('/images/hero-bg.webp')] bg-cover bg-center h-full w-full">
            <section className="space-y-16 p-32">
                <section className="flex flex-col space-y-8 w-[65%]">
                    <section className="rounded-full border border-white w-fit">
                        <p className="text-sm text-white font-normal px-4 py-1">
                            {heroItems.label}
                        </p>
                    </section>
                    <p className="text-7xl text-white font-bold">
                        {heroItems.title}
                    </p>
                    <p className="text-base text-white font-medium w-[60%]">
                        {heroItems.subtitle}
                    </p>
                    <button className="w-fit h-12 flex items-center space-x-1 px-4 bg-white rounded-md" onClick={()=>router.replace(heroItems.button.url)}>
                        <p className="text-base text-zinc-950 font-medium">
                            {heroItems.button.text}
                        </p>
                        <ChevronRightIcon className="text-zinc-950 w-4 h-4" />
                    </button>
                </section>
                <section className="w-full max-w-full">
                    <Image
                        src={heroItems.image}
                        width={1248}
                        height={856}
                        alt="hero-image"
                        className="rounded-2xl"
                    />
                </section>
            </section>
        </section>
    )
 }

 export default Hero;