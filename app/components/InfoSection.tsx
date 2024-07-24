const sectionItems = {
    title: "The ultimate GUI Git client",
    titleTwo: "for streamlining and enhancing your local code management process",
    divOne: [
        { title: "Review code changes with precision", subtitle: "Easily compare versions to catch every detail and ensure your code update is flawless.", linkName: "Read more about diff options", link: "#", img: "/images/div-one.webp" },
        { title: "Review code changes with precision", subtitle: "Copy commits from one branch to another, combine multiple commits in your branch history, or alter your commit history with an intuitive drag and drop functionality unique to GitHub Desktop.", linkName: "Options for managing commits in GitHub Desktop", link: "#", img: "/images/div-one.webp" },
    ],
    divTwo: { title: "Stash your changes without committing them to a branch", listText: "Manage your work-in-progress by saving changes that you’re not ready to commit to quite yet.", listTwoText: "This will maximize your efficiency, flexibility, and creativity.", img: "/images/div-two.webp" },
    divThree: {title: "Maintain flexibility and seamless management of your codebase", subtitle: "Make adjustments to update messages, incorporate new changes, or revert to earlier states when needed. Easily make changes to your project’s history with simple adjustments and reversals.", img: "/images/div-three.webp" }
}

const InfoSection = () => {
    return (
        <section className="bg-neutral-900 w-full">
            <section className="space-y-16 p-32">
                <section className="text-4xl">
                    <span className="text-white font-bold">
                        {sectionItems.title}
                    </span>
                    <span className="text-zinc-400 font-medium">
                        {sectionItems.titleTwo}
                    </span>
                </section>
            </section>
        </section>
    )
}

export default InfoSection;