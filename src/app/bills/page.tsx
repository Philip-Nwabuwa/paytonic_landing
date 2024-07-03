import Cta from "@/components/common/Cta";
import Faq from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/modules/Bills/Hero";
import Services from "@/components/modules/Bills/Services";
import Steps from "@/components/modules/Bills/Steps";

const Bills = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <Services />
        <Steps />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};

export default Bills;
