import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import Image from "next/image";

import SendMomeyImage from "@/assets/images/send/transfer.svg";

const Steps = () => {
  return (
    <section className="max-width bg-white text-center p-10 lg:p-16 rounded-3xl">
      <ScrollAnimate>
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
          Send Money with Paytonic:
          <br /> A Simple Guide
        </h2>
      </ScrollAnimate>
      <ScrollAnimate>
        <p className="mt-6 text-lg leading-6 text-gray-600">
          Sending money with Paytonic is quick and hassle-free.
          <br /> Follow these steps to transfer funds securely.
        </p>
      </ScrollAnimate>
      <div className="grid lg:grid-cols-3 lg:gap-10 mt-20">
        <div className="flex flex-col gap-10">
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">Step 1:</h4>
            <p className="text-gray-500">
              Log in to your Paytonic account and navigate to the Send Money
              section.
            </p>
          </ScrollAnimate>
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">Step 2:</h4>
            <p className="text-gray-500">
              Enter the recipient&apos;s bank account or username and the amount
              you want to send.
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <Image src={SendMomeyImage} alt={"send money image"} />
        </ScrollAnimate>
        <div className="flex flex-col gap-10">
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">Step 3:</h4>
            <p className="text-gray-500">
              Review the details and confirm the transaction.
            </p>
          </ScrollAnimate>
          <ScrollAnimate>
            <h4 className="text-xl font-black pb-4">Step 4:</h4>
            <p className="text-gray-500">
              The recipient will receive the money instantly in their account.
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Steps;
