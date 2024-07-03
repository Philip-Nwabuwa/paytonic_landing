import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Contact from "@/components/common/Contact";
import Hero from "@/components/modules/Contact/Hero";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[120px]">
        <Hero />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default ContactPage;
