import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import { MoveRight } from "lucide-react";
import React from "react";

const Simplify = () => {
  return (
    <section className="max-width">
      <div className="bg-white flex flex-col text-center rounded-3xl py-10 lg:py-16">
        <ScrollAnimate>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
            Paytonic: Simplify your bill payments
            <br /> with low transaction fees
          </h2>
        </ScrollAnimate>
        <div className="grid md:grid-cols-3 mt-12">
          <ScrollAnimate>
            <div className="flex flex-col gap-6 items-center justify-center px-10 py-6">
              <h3 className="text-2xl font-bold">
                Instant transfers made easy with Paytonic&apos;s user-friendly
                interface
              </h3>
              <p className="text-gray-600">
                Paytonic allows you to pay bills, transfer money, and more
              </p>
              <Button intent={"outlined"} className="flex items-center gap-2">
                <p>Learn more</p>{" "}
                <MoveRight className="ml-2" aria-hidden="true" />
              </Button>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="flex flex-col gap-6 items-center justify-center p-6">
              <h3 className="text-2xl font-bold">
                Experience hassle-free bill payments with Paytonic&apos;s
                intuitive features
              </h3>
              <p className="text-gray-600">
                Paytonic provides a secure and convenient way to manage your
                finances
              </p>
              <Button intent={"outlined"}>Sign Up</Button>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="flex flex-col gap-6 items-center justify-center p-6">
              <h3 className="text-2xl font-bold">
                Enjoy seamless money transfers with Paytonic&apos;s reliable
                platform
              </h3>
              <p className="text-gray-600">
                Paytonic offers quick and secure transactions for your peace of
                mind
              </p>
              <Button intent={"outlined"}>Get Started</Button>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Simplify;
