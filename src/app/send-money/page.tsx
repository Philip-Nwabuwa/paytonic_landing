import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Testimonial from "@/components/common/Testimonial";
import Hero from "@/components/modules/Send-money/Hero";
import Send from "@/components/modules/Send-money/Send";
import Steps from "@/components/modules/Send-money/Steps";

const SendMoney = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <Send />
        <Steps />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};

export default SendMoney;
