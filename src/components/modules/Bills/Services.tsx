import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import bill1 from "@/assets/images/bill1.jpg";
import bill2 from "@/assets/images/bills3.jpg";
import bill3 from "@/assets/images/bills2.jpg";

const Services = () => {
  return (
    <section className="w-full flex flex-col gap-10 max-width">
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 lg:p-16 rounded-3xl">
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Conveniently Recharge Your Mobile Airtime with Paytonic
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              With Paytonic, you can easily recharge your mobile airtime in just
              a few clicks. Say goodbye to the hassle of buying physical
              recharge cards or visiting retail outlets. Simply log in to your
              Paytonic account, choose the amount you want to recharge, and
              enjoy instant airtime top-up.
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <Image
            src={bill1}
            alt="Bills"
            className="w-full h-full rounded-3xl"
          />
        </ScrollAnimate>
      </div>
      <div className="bg-white grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-16 rounded-3xl">
        <ScrollAnimate>
          <Image
            src={bill2}
            alt="Bills"
            className="w-full h-full rounded-3xl"
          />
        </ScrollAnimate>
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Conveniently purchase data bundles for various networks
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              With Paytonic, you can easily pay for data bundles for different
              networks. Stay connected without any hassle.
            </p>
          </ScrollAnimate>
        </div>
      </div>
      <div className="bg-white grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-16 rounded-3xl">
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Pay Your Electricity Bills with Ease
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              With Paytonic, you can effortlessly pay your electricity bills for
              different service providers. Say goodbye to long queues and enjoy
              the convenience of online bill payments.
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <Image
            src={bill3}
            alt="Bills"
            className="w-full h-full rounded-3xl"
          />
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Services;
