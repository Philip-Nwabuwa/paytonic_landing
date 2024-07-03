import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import About from "@/components/modules/Pos/About";
import Facts from "@/components/modules/Pos/Facts";
import Hero from "@/components/modules/Pos/Hero";

const Pos = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <About />
        <Facts />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};

export default Pos;
