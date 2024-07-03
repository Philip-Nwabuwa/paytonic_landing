import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Hero = () => {
  return (
    <section className="max-width pt-14 sm:pt-20">
      <ScrollAnimate>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
          Transforming Financial Transactions
        </h1>{" "}
        <p className="text-lg text-center text-gray-500">
          Paytonic is on a mission to simplify financial transactions for users,
          making it easier and more convenient than ever before.{" "}
        </p>
      </ScrollAnimate>
    </section>
  );
};

export default Hero;
