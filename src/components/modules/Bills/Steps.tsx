import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Steps = () => {
  return (
    <section className="max-width bg-white text-center p-10 lg:p-16 rounded-3xl">
      <ScrollAnimate>
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
          Easy Steps to Pay Your Bills
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
              Step 1: Select Bill Type
            </h4>
            <p className="text-gray-500">
              Choose the type of bill you want to pay from the available
              options.
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <h4 className="text-xl font-black pb-4">
            Step 2: Enter Bill Details
          </h4>
          <p className="text-gray-500">
            Provide the necessary details for the bill payment, such as the bill
            amount and account number.
          </p>
        </ScrollAnimate>
        <div className="flex flex-col gap-10">
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">
              Step 3: Review and Confirm
            </h4>
            <p className="text-gray-500">
              Double-check the entered information and confirm the payment.
            </p>
          </ScrollAnimate>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center gap-x-6">
        <Link href="#">
          <Button intent="primary">Pay bills</Button>
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

export default Steps;
