import Image from "next/image"

const testimonialItem = {
    review: "GitHub Desktop is really one of the best 80/20 programs I have seen. It hides the details of git (which are irrelevant) and just lets you get on with your work.",
    reviewer: {
        fullName: "Sean Cassiere",
        username: "@seancassiere",
        avatar: "/images/avatar.png"
    }
}

const Testimonial = () => {
    return (
        <section className="w-full flex justify-center">
            <section className="w-[86%] space-y-12 md:w-full">
                <section>
                    <h2 className="text-[7.5rem] text-white font-black">
                        “
                    </h2>
                </section>
                <section className="w-full">
                    <p className="text-[2.5rem] text-white font-semibold leading-tight lg:text-2xl">
                        {testimonialItem.review}
                    </p>
                </section>
                <section className="flex items-center space-x-4">
                    <Image
                        src={testimonialItem.reviewer.avatar}
                        width={48}
                        height={48}
                        alt={testimonialItem.reviewer.fullName}
                        className="rounded-full"
                    />
                    <section className="space-y-1">
                        <p className="text-white text-base font-semibold">
                            {testimonialItem.reviewer.fullName}
                        </p>
                        <p className="text-zinc-400 text-base font-mono">
                            {testimonialItem.reviewer.username}
                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Testimonial;