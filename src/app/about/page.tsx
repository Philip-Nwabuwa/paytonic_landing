import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Testimonial from "@/components/common/Testimonial";
import Manage from "@/components/modules/About/Manage";
import Hero from "@/components/modules/Send-money/Hero";

const About = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <Manage />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};

export default About;
