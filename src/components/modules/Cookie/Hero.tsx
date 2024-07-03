import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Hero = () => {
  return (
    <section className="max-width pt-14 sm:pt-20">
      <ScrollAnimate>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
          Understanding Our Policies
        </h1>{" "}
        <p className="text-lg text-center text-gray-500">
          Learn more about our cookie policy and how we use cookies.
        </p>
      </ScrollAnimate>
    </section>
  );
};

export default Hero;
