"use client"
import Image from "next/image";
import { sectionContent } from "./InfoSection";

const InfoThreeSection = () => {
    return (
        <section className="w-full">
            <section className="flex items-center justify-between lg:flex-col lg:space-y-6">
                <section className="w-[50%] lg:w-full max-w-full">
                    <Image   
                        src={sectionContent.managementFeature.imageSrc}
                        width={600}
                        height={410}
                        alt={sectionContent.managementFeature.title}
                    />
                </section>
                <section className="space-y-6 w-[48%] lg:w-full">
                    <p className="text-[2.5rem] text-white font-bold lg:text-2xl">
                        {sectionContent.managementFeature.title}
                    </p>
                    <p className="text-base text-zinc-400 font-medium">
                        {sectionContent.managementFeature.description}
                    </p>
                </section>
            </section>
        </section>
    )
}

export default InfoThreeSection;