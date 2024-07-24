import Cards from "./components/Cards";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import InfoThreeSection from "./components/InfoThreeSection";
import InfoTwoSection from "./components/InfoTwoSection";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <section className="bg-[#0d1117]">
        <section className="p-32 space-y-24 lg:px-8">
          <InfoSection />
          <InfoTwoSection />
          <InfoThreeSection />
        </section>
      </section>
      <section className="bg-[#161b22]">
        <section className="space-y-32 p-32 lg:px-8">
          <Testimonial />
          <CTA />
          <Cards />
        </section>
      </section>
    </main>
  )
}

export default Home;