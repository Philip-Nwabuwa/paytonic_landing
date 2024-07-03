import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Hero = () => {
  return (
    <section className="max-width py-20 pt-14 sm:py-32 sm:pt-20">
      <ScrollAnimate>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
          Send Money Easily
        </h1>{" "}
        <p className="text-lg text-center text-gray-500">
          Transfer money securely to anyone with just a few clicks.
        </p>
      </ScrollAnimate>
    </section>
  );
};

export default Hero;