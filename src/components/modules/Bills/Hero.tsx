import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Hero = () => {
  return (
    <section className="max-width pt-14 sm:pt-20">
      <ScrollAnimate>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
          Pay Any Bill
        </h1>{" "}
        <p className="text-lg text-center text-gray-500">
          Easily pay your bills with Paytonic. We offer a wide range of bill
          payment options.
        </p>
      </ScrollAnimate>
    </section>
  );
};

export default Hero;
