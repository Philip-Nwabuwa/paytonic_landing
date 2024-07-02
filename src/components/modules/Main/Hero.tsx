import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="relative md:pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-20 pt-14 sm:py-32 sm:pt-20">
          <ScrollAnimate
            transitionDelay={0.1}
            className="mb-6 flex justify-center"
          >
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">Innovation lab - </span>
              <a href="#" className="font-semibold text-primary-main">
                <span className="absolute inset-0" aria-hidden="true" />
                Fintech startup 2024
              </a>
            </p>
          </ScrollAnimate>
          <ScrollAnimate className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollAnimate className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-7xl gradient-text">
                Simplify your financial transactions with Paytonic.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Paytonic is the easiest way to pay bills, transfer money, and
                more.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#">
                  <Button intent="primary">Get started</Button>
                </Link>
                <Link href="#">
                  <Button
                    intent={"outlined"}
                    className="flex items-center gap-2"
                  >
                    <p>Learn more</p>{" "}
                    <MoveRight className="ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimate>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Hero;
