import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useRouter } from "next/router"

const heroItems = {
    title: "Experience Git without the struggle",
    subtitle: "Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.",
    label: "Github Desktop",
    button: { text: "Download now", url: "#" },
    image: "/images/hero-img",
    bgImg: "/images/hero-bg"
}
 
 const Hero = () => {
    const router = useRouter();
    return (
        <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center h-full w-full">
            <section className="space-y-16 p-16">
                <section className="flex flex-col space-y-8">
                    <p className="text-7xl text-white font-black">
                        {heroItems.title}
                    </p>
                    <p className="text-base text-white font-medium">
                        {heroItems.subtitle}
                    </p>
                    <button className="flex items-center space-x-1 px-4 bg-white rounded-md" onClick={()=>router.replace(heroItems.button.url)}>
                        <p className="text-base text-zinc-950 font-normal">
                            {heroItems.button.text}
                        </p>
                        <ChevronRightIcon className="text-zinc-950 w-4 h-4" />
                    </button>
                </section>
                <section className="w-full">
                    <Image
                        src={heroItems.image}
                        layout="fill"
                        alt="hero-image"
                    />
                </section>
            </section>
        </section>
    )
 }

 export default Hero;