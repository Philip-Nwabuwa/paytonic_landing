import { MoveRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";

const Facts = () => {
  return (
    <section className="max-width bg-white text-center p-10 lg:p-16 rounded-3xl">
      <ScrollAnimate>
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
          Streamline your inventory management with Paytonic&apos;s Point of
          Sale
        </h2>
      </ScrollAnimate>
      <ScrollAnimate>
        <p className="mt-6 text-lg leading-6 text-gray-600">
          With Paytonic&apos;s Bills feature, you can quickly and securely pay
          your bills in just a few simple steps.
          <br /> Follow the guide below to get started:
        </p>
      </ScrollAnimate>
      <div className="grid lg:grid-cols-3 lg:gap-10 mt-20">
        <div className="flex flex-col gap-10">
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">
              Analyze your sales data effortlessly using Paytonic&apos;s Point
              of Sale
            </h4>
            <p className="text-gray-500">
              Efficiently manage your inventory and track sales performance with
              Paytonic&apos;s Point of Sale feature.
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <h4 className="text-xl font-black pb-4">
            Enable multi-user access for your business with Paytonic&apos;s
            Point of Sale
          </h4>
          <p className="text-gray-500">
            Collaborate with your team and grant them access to the Point of
            Sale feature in Paytonic.
          </p>
        </ScrollAnimate>
        <div className="flex flex-col gap-10">
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">
              Effortlessly manage your sales and inventory with Paytonic&apos;s
              Point of Sale
            </h4>
            <p className="text-gray-500">
              Simplify your business operations by using Paytonic&apos;s Point
              of Sale feature for seamless sales and inventory management.
            </p>
          </ScrollAnimate>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center gap-x-6">
        <Link href="#">
          <Button intent="primary">Get POS</Button>
        </Link>
        <Link href="#">
          <Button intent={"outlined"} className="flex items-center gap-2">
            <p>Learn more</p> <MoveRight className="ml-2" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Facts;
