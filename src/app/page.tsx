import Hero from "@/components/modules/Main/Hero";
import Testimonial from "@/components/common/Testimonial";
import Cta from "@/components/common/Cta";
import BillsPayment from "@/components/modules/Main/BillsPayment";
import Team from "@/components/modules/Main/Team";
import Simplify from "@/components/modules/Main/Simplify";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <BillsPayment />
        <Simplify />
        {/* <Team /> */}
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}
