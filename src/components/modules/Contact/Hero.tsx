import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Hero = () => {
  return (
    <section className="max-width pt-14 sm:pt-20">
      <ScrollAnimate>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
          Contact Us
        </h1>{" "}
        <p className="text-lg text-center text-gray-500">
          We&apos;re here to help! Reach out to us anytime, and we&apos;ll
          happily answer your questions.
        </p>
      </ScrollAnimate>
    </section>
  );
};

export default Hero;
