import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/modules/Terms/Hero";
import Note from "@/components/modules/Terms/Note";

const page = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <Note />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};

export default page;
