import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import pos1 from "@/assets/images/pos1.jpg";
import pos2 from "@/assets/images/pos2.jpg";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-10 max-width">
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 lg:p-16 rounded-3xl">
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Streamline Your Payment Processes with Paytonic&apos;s Point of
              Sale
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Experience real-time transaction tracking and simplified payment
              processes with Paytonic&apos;s Point of Sale system. Our
              innovative technology ensures efficiency and convenience for your
              business.
            </p>
          </ScrollAnimate>
          <ScrollAnimate className="mt-10 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Real-time</h3>
              <p>
                Track transactions instantly and stay updated on your
                business&apos;s financial activities.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Simplified</h3>
              <p>
                Make payments hassle-free with our user-friendly and intuitive
                Point of Sale system.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#">
                <Button intent="primary">Get started</Button>
              </Link>
              <Link href="#">
                <Button intent={"outlined"} className="flex items-center gap-2">
                  <p>Learn more</p>{" "}
                  <MoveRight className="ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <Image src={pos1} alt="Bills" className="w-full h-full rounded-3xl" />
        </ScrollAnimate>
      </div>
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 lg:p-16 rounded-3xl">
        <ScrollAnimate>
          <Image src={pos2} alt="Bills" className="w-full h-full rounded-3xl" />
        </ScrollAnimate>
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Boost Your Business with Paytonic&apos;s Point of Sale
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Paytonic&apos;s Point of Sale system offers a range of benefits
              for businesses looking to grow and improve efficiency. With our
              intuitive interface and advanced features, you can streamline your
              sales process and take your business to the next level.
            </p>
          </ScrollAnimate>
          <ScrollAnimate className="mt-10 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Increase Sales</h3>
              <p>
                Accept payments seamlessly and boost your sales with
                Paytonic&apos;s Point of Sale system.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Improve Efficiency</h3>
              <p>
                Streamline your sales process and save time with our
                user-friendly Point of Sale system.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#">
                <Button intent="primary">Get started</Button>
              </Link>
              <Link href="#">
                <Button intent={"outlined"} className="flex items-center gap-2">
                  <p>Learn more</p>{" "}
                  <MoveRight className="ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default About;
