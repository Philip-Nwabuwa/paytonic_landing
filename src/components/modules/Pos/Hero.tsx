import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Hero = () => {
  return (
    <section className="max-width flex items-center justify-center pt-14 sm:pt-20">
      <ScrollAnimate>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
          Efficient Point of Sale
        </h1>{" "}
        <p className="w-full text-lg max-w-[500px] text-center text-gray-500">
          Streamline your sales process with Paytonic&apos;s Point of Sale
          services. Accept payments seamlessly and manage your inventory with
          ease.
        </p>
      </ScrollAnimate>
    </section>
  );
};

export default Hero;
